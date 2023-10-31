import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

a = 1

def tryme():
    # Replace with cloud data
    x = np.linspace(100, 150, 200)
    y = np.cos(x)
    #

    impFig = plt.plot(x, y)
    plt.savefig("./assets/impPlot.png")

def funco():
    print('WHY')

funco()