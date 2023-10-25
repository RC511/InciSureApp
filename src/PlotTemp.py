import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

# Replace with cloud data
x = np.linspace(0, 20, 100)
y = np.sin(x)
#

tempFig = plt.plot(x, y)
plt.savefig("./assets/tempPlot.png")