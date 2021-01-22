# this script is just to make a chart
import json
import matplotlib.pyplot as plt
import os
import numpy as np
import math

dirname = os.path.dirname(__file__)
fileName1 = os.path.join(dirname, 'data.json')

with open(fileName1, 'r') as myfile:
    jsonData = myfile.read()
data = json.loads(jsonData)


plt.ylabel('Intensity')
plt.xlabel('pt')
# plt.yscale('log')
# plt.xscale('log')
# ax.tick_params(axis='y')

plt.plot(data['x'], data['y'])
plt.tight_layout()
plt.show()
