---
title: Exploring Transformer Architecture  with Conway’s Game of Life
date: 2024-08-08
---
So, I’m boofing around in my room, and I think, “What’s a cool machine learning project I can mess with?” That’s how I ended up trying to predict the next state in Conway’s Game of Life using a Transformer model. It wasn’t easy, but it was worth the effort.

### **Why Conway’s Game of Life?**

Conway’s Game of Life is a simple grid-based game where each cell lives or dies based on a few basic rules. Despite its simplicity, the game can generate some pretty complex patterns. I wanted to see if I could use a Transformer model, usually used for text, to predict these patterns.

### **Setting Up the Project**

To start, I set up a Python environment with the necessary libraries:

```bash
pip install torch numpy matplotlib
```

These libraries helped me with building, training, and visualizing the model.

### **Generating the Data**

The next step was generating data. In Conway’s Game of Life, each grid is a 16x16 matrix where each cell is either dead (`0`) or alive (`1`). I needed sequences of these grids for training the model. Here’s the code I used:

```python
import numpy as np

def generate_initial_grid(size=16):
    return np.random.choice([0, 1], size=(size, size))

def game_of_life_step(grid):
    neighbors = sum(np.roll(np.roll(grid, i, 0), j, 1)
                    for i in (-1, 0, 1) for j in (-1, 0, 1)
                    if (i, j) != (0, 0))
    return (neighbors == 3) | (grid & (neighbors == 2))

def generate_sequence(initial_grid, steps=10):
    sequence = [initial_grid]
    grid = initial_grid.copy()
    for _ in range(steps):
        grid = game_of_life_step(grid)
        sequence.append(grid)
    return sequence

dataset = create_dataset(num_samples=5000, grid_size=16, sequence_length=10)
np.save("game_of_life_dataset.npy", dataset)
```

### **Building the Transformer Model**

With the data ready, I built a Transformer model. The idea was to treat each grid as a sequence, with each cell’s state influenced by its neighbors. Here’s what the model looked like:

```python
class TransformerModel(nn.Module):
	def __init__(self, grid_size, num_heads, num_layers, d_model, dim_feedforward):
		super(TransformerModel, self).__init__()
		self.embedding = nn.Linear(grid_size * grid_size, d_model)
		self.positional_encoding = nn.Parameter(torch.zeros(1, 1, d_model))
		encoder_layer = nn.TransformerEncoderLayer(d_model=d_model, nhead=num_heads, dim_feedforward=dim_feedforward, batch_first=True)
		self.transformer_encoder = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
		self.fc_out = nn.Linear(d_model, grid_size * grid_size)
	
	def forward(self, x):
		x = self.embedding(x) + self.positional_encoding
		x = self.transformer_encoder(x)
		x = self.fc_out(x)
		return torch.sigmoid(x)
```

### **Training the Model**

Training the model was challenging, and the results were okay, but not groundbreaking. Here’s the training loop I used:

```python
def train_model(model, train_loader, num_epochs=100, learning_rate=0.0001):
    criterion = nn.BCELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(optimizer, mode='min', factor=0.5, patience=5, verbose=True)
    
    for epoch in range(num_epochs):
        epoch_loss = 0.0
        for inputs, targets in train_loader:
            optimizer.zero_grad()
            outputs = model(inputs)
            loss = criterion(outputs, targets)
            loss.backward()
            optimizer.step()
            epoch_loss += loss.item()
        
        average_loss = epoch_loss / len(train_loader)
        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {average_loss:.4f}")
        
        scheduler.step(average_loss)
        
        if average_loss < 0.001:
            print("Early stopping as the model has reached near-perfect accuracy.")
            break
```

### **What I Learned**

While the results weren’t perfect, I learned a lot. To improve the model, I’d probably train it on cloud GPUs, tweak the hyperparameters more, and use longer sequences in the training data. This would likely make the predictions more accurate.

### **Conclusion**

This project was a solid introduction to using machine learning for something unconventional. If you’re into experimenting with new ideas, I’d recommend giving it a try. It’s a great way to learn and push your skills.

Feel free to reach out if you have any questions or ideas!

### **References**

- PyTorch Documentation: [https://pytorch.org/docs/stable/index.html](https://pytorch.org/docs/stable/index.html)
- Transformer Model Architecture: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
- Conway’s Game of Life: [https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

---

This version is straightforward, with a single joke and a clear focus on the project details.