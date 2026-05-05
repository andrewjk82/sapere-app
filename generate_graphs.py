import numpy as np
import matplotlib.pyplot as plt
import os

os.makedirs('public/images/questions', exist_ok=True)

x = np.linspace(-6.5, 6.5, 400)
c = 116/13
yC = (x * (x**2 - 25)) / (x**2 + c)
yA = -yC

k = 100/17
yD = (x**2 - 25)* (x**2) / (x**2 + k)**2 * 3
yB = -yD

def plot_graph(x, y, filename):
    fig, ax = plt.subplots(figsize=(4, 3))
    
    # Move left and bottom spines to x=0 and y=0
    ax.spines['left'].set_position('zero')
    ax.spines['bottom'].set_position('zero')
    ax.spines['right'].set_color('none')
    ax.spines['top'].set_color('none')
    
    ax.plot(x, y, color='black', linewidth=1.2)
    
    ax.set_xlim(-6.5, 6.5)
    ax.set_ylim(-5, 5)
    
    ax.set_xticks([-5, -2, 2, 5])
    ax.set_xticklabels(['$-5$', '$-2$', '$2$', '$5$'])
    ax.set_yticks([])
    
    # Dotted lines
    y_at_2 = np.interp(2, x, y)
    y_at_m2 = np.interp(-2, x, y)
    ax.plot([2, 2], [0, y_at_2], 'k:', linewidth=1)
    ax.plot([-2, -2], [0, y_at_m2], 'k:', linewidth=1)
    
    # Add arrows
    ax.plot(6.5, 0, ">k", clip_on=False)
    ax.plot(-6.5, 0, "<k", clip_on=False)
    ax.plot(0, 5, "^k", clip_on=False)
    ax.plot(0, -5, "vk", clip_on=False)
    
    ax.text(6.2, -0.8, '$x$', fontstyle='italic')
    ax.text(-0.5, 4.5, '$y$', fontstyle='italic')
    
    plt.tight_layout()
    plt.savefig(f'public/images/questions/{filename}', transparent=True, dpi=150)
    plt.close()

plot_graph(x, yA, 'q_curve_A.png')
plot_graph(x, yB, 'q_curve_B.png')
plot_graph(x, yC, 'q_curve_C.png')
plot_graph(x, yD, 'q_curve_D.png')
