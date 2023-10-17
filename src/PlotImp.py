import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

# Replace with cloud data
x = np.linspace(100, 150, 200)
y = np.sin(x)
#

impFig = plt.plot(x, y)
plt.savefig("./src/assets/impPlot.png")