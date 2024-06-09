import tkinter as tk
import pickle
import os
from tkinter import filedialog
import codecs

w = tk.Tk()
w.configure(background='gray')
w.title('PepiNote')
w.iconbitmap("ico.ico")

l2 = []
l3 = ''

gru = 'f'
ind = 'f'
lista = []
luli = []
komenami = ''
agnolaga = 'NJEG'

ljel = []
lista2 = []
ljel2 = ''

f = tk.Frame(master=w, bg="gray")

f2 = tk.Frame(master=w, bg="gray")

l = tk.Label(text="Type", bg='gray')
e = tk.Text()
l.pack()
e.pack()
def load():
    global l2
    global l3
    for i in range(len(e.get("1.0", tk.END))):
        l2.append(e.get("1.0", tk.END)[i])
    l2.reverse()
    for i in range(len(l2)):
        l3 = l3 + l2[i]
    l3 = 'revres:' + l3
    print(l3)
    l4.config(text = l3, bg='gray')
    l2 = []
    l3 = ""

def save_to_file():
    global ind
    global luli
    global lista
    global komenami
    global agnolaga
    luli = []
    lista = []
    konenami = ''
    if ind == 'f':
        file_path = filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Text files", "*.txt"), ("All files", "*.*")])
        if file_path:
            with codecs.open(file_path, 'w', "utf-8") as file:
                text_content = e.get("1.0", "end-1c")
                file.write(text_content)
    if ind == 't':
        file_path = filedialog.asksaveasfilename(defaultextension=".", filetypes=[("All files", "*.*")])
        if file_path:
            luli = []
            lista = []
            komenami = ''
            try:
                os.remove(file_path)
            except FileNotFoundError:
                angnolaga = 'traktor ide buuum'
            #print('e: ' + e.get("1.0", "end-1c"))
            for i in range(len(e.get("1.0", "end-1c"))):
                luli.append(e.get("1.0", "end-1c")[i])
            #print('luli: ', luli)
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'a':
                    luli[i] = 'Z'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'Z' and i != lista[i]:
                    luli[i] = 'a'
            #print('konenami: ', konenami)


            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'b':
                    luli[i] = '!'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == '!' and i != lista[i]:
                    luli[i] = 'b'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'c':
                    luli[i] = 'k'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'k' and i != lista[i]:
                    luli[i] = 'c'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'o':
                    luli[i] = '?'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == '?' and i != lista[i]:
                    luli[i] = 'o'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'l':
                    luli[i] = 'U'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'U' and i != lista[i]:
                    luli[i] = 'l'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'p':
                    luli[i] = 'T'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'T' and i != lista[i]:
                    luli[i] = 'p'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == '.':
                    luli[i] = '@'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == '@' and i != lista[i]:
                    luli[i] = '.'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == '1':
                    luli[i] = 'q'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'q' and i != lista[i]:
                    luli[i] = '1'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'e':
                    luli[i] = '4'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == '4' and i != lista[i]:
                    luli[i] = 'e'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'i':
                    luli[i] = 'P'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'P' and i != lista[i]:
                    luli[i] = 'i'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'u':
                    luli[i] = 'M'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'M' and i != lista[i]:
                    luli[i] = 'u'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'n':
                    luli[i] = 'g'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'g' and i != lista[i]:
                    luli[i] = 'n'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'A':
                    luli[i] = 'v'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'v' and i != lista[i]:
                    luli[i] = 'A'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'E':
                    luli[i] = 'x'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'x' and i != lista[i]:
                    luli[i] = 'E'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'I':
                    luli[i] = 'h'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'h' and i != lista[i]:
                    luli[i] = 'I'
            #print('konenami: ', konenami)
                    
            lista = []
            for i in range(len(luli)):
                lista.append(-1)
            for i in range(len(luli)):
                if luli[i] == 'O':
                    luli[i] = 'F'
                    lista[i] = i
                    #print(lista)
            for i in range(len(luli)):
                if luli[i] == 'F' and i != lista[i]:
                    luli[i] = 'O'
            #print('konenami: ', konenami)

            
            for i in range(len(luli)):
                komenami = komenami + luli[i]
                #print(konenami)
            #print(komenami)
            pickle.dump(komenami, open(file_path, "wb"))
            #text_content = e.get("1.0", "end-1c")
            

def en():
    global ind
    global gru
    gru = 'f'
    if ind == 'f':
        ind = 't'
        g.config(text = 'Open Encrypted', width=12)
        g2.config(text = 'Save Encrypted', width=12)
        gru = 't'
    if ind == 't' and gru == 'f':
        ind = 'f'
        g.config(text = 'Open .txt', width=7)
        g2.config(text = 'Save .txt', width=7)
        
def load2():
    if ind == 'f':
        with open("cul.txt", "w") as file:
            file.write(e.get('1.0', tk.END))
    if ind == 't':
        pickle.dump('yes', open('b2.dat', "wb"))

def open_file():
    global ljel
    global ljel2
    global lista2
    if ind == 'f':
        file_path = filedialog.askopenfilename(
            title="Select a Text File", filetypes=[("Text files", "*.txt"), ("All files", "*.*")])
        if file_path:
            with codecs.open(file_path, 'r', "utf-8") as file:
                content = file.read()
                e.delete(1.0, tk.END)
                e.insert(tk.END, content)
    if ind == 't':
        file_path = filedialog.askopenfilename(
            title="Select a Text File", filetypes=[("All files", "*.*")])
        if file_path:
            ljel = []
            lista2 = []
            ljel2 = ''
            ojes = pickle.load(open(file_path, "rb"))
            for i in range(len(ojes)):
                ljel.append(ojes[i])
            for i in range(len(ljel)):
                lista2.append(-1)
            for i in range(len(ljel)):
                if ljel[i] == 'Z':
                    ljel[i] = 'a'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'a' and i != lista2[i]:
                    ljel[i] = 'Z'
            

            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'b':
                    ljel[i] = '!'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == '!' and i != lista2[i]:
                    ljel[i] = 'b'

            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'c':
                    ljel[i] = 'k'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'k' and i != lista2[i]:
                    ljel[i] = 'c'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'o':
                    ljel[i] = '?'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == '?' and i != lista2[i]:
                    ljel[i] = 'o'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'l':
                    ljel[i] = 'U'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'U' and i != lista2[i]:
                    ljel[i] = 'l'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'p':
                    ljel[i] = 'T'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'T' and i != lista2[i]:
                    ljel[i] = 'p'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == '.':
                    ljel[i] = '@'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == '@' and i != lista2[i]:
                    ljel[i] = '.'

            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == '1':
                    ljel[i] = 'q'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'q' and i != lista2[i]:
                    ljel[i] = '1'
            
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'e':
                    ljel[i] = '4'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == '4' and i != lista2[i]:
                    ljel[i] = 'e'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'i':
                    ljel[i] = 'P'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'P' and i != lista2[i]:
                    ljel[i] = 'i'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'u':
                    ljel[i] = 'M'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'M' and i != lista2[i]:
                    ljel[i] = 'u'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'n':
                    ljel[i] = 'g'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'g' and i != lista2[i]:
                    ljel[i] = 'n'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'A':
                    ljel[i] = 'v'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'v' and i != lista2[i]:
                    ljel[i] = 'A'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'E':
                    ljel[i] = 'x'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'x' and i != lista2[i]:
                    ljel[i] = 'E'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'I':
                    ljel[i] = 'h'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'h' and i != lista2[i]:
                    ljel[i] = 'I'
                    
            lista2 = []
            for i in range(len(ljel)):
                lista2.append(-1)            
            for i in range(len(ljel)):
                if ljel[i] == 'O':
                    ljel[i] = 'F'
                    lista2[i] = i
            for i in range(len(ljel)):
                if ljel[i] == 'F' and i != lista2[i]:
                    ljel[i] = 'O'
                    

                    

            
            for i in range(len(ljel)):
                ljel2 = ljel2 + ljel[i]
            e.delete(1.0, tk.END)
            e.insert(tk.END, ljel2)

def en2():
    w2 = tk.Tk()
    w2.configure(background='gray')
    w2.title('Instructions')
    w2.iconbitmap("ico.ico")
    lol = tk.Label(text="THE INSTRUCTIONS", master=w2, bg="gray").pack()
    loll = tk.Label(text='Hello, This is PepiNote, the "best" text editor in the world!\nTo use the editor, type something in and save it\n with the Save .txt button. It will be saved as a text file.\nYou can even open text files by clicking Open .txt button.\nIf you choose the Toggle Format option, you will be saving files as\ncustom encrypted files. You can only read these files through PepiNote\nbecause they are encrypted and will show random text in\nthe notepad editor. To save an encrypted file you need to press the\nSave Encrypted button, and to open an encrypted file you need to\npress the Open Encrypted button. At the bottom left corner you\ncan see the version of PepiNote. HAVE FUN!!! :)', master=w2, bg="white").pack(side=tk.LEFT)
 
g = tk.Button(text="Open .txt", bg="lightblue", fg="black",
    width=7, height=1, command=open_file, master=f)
g2 = tk.Button(text="Save .txt", bg="lightblue", fg="black",
    width=7, height=1, command=save_to_file, master=f)
g3 = tk.Button(text="Toggle Format", bg="lightblue", fg="black",
    width=11, height=1, command=en, master=f)
g4 = tk.Button(text="?", bg="lightblue", fg="black",
    width=2, height=1, command=en2, master=f)
lel = tk.Label(text="   ", master=f, bg="gray")
lel2 = tk.Label(text="   ", master=f, bg="gray")
lel3 = tk.Label(text="   ", master=f, bg="gray")
f.pack()
g.pack(side=tk.LEFT)
lel.pack(side=tk.LEFT)
g2.pack(side=tk.LEFT)
lel2.pack(side=tk.LEFT)
g3.pack(side=tk.LEFT)
lel3.pack(side=tk.LEFT)
g4.pack(side=tk.LEFT)
l4 = tk.Label(text="Made by Pepi :)", bg='gray', master=f2)
l5 = tk.Label(text="v1.0", bg='gray', master=f2)
l6 = tk.Label(text="                                                                                                                                                                                      ", bg='gray', master=f2)
l4.pack(side='left')
l6.pack(side='left')
l5.pack(side='right')
f2.pack()
w.mainloop()



