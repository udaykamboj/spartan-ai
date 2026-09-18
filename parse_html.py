from bs4 import BeautifulSoup
import json

with open('_reference/index.html', 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')

def find_text(text):
    elements = soup.find_all(string=lambda t: text in t if t else False)
    for el in elements:
        parent = el.parent
        print(f"Found '{text}' in tag: {parent.name}")
        print(f"Classes: {parent.get('class')}")
        print(f"Style: {parent.get('style')}")
        print(f"Computed CSS from style tags could be mapped via class.")

find_text("Scale your ideas")
