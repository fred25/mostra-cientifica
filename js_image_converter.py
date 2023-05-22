import os
from PIL import Image

original_dir = "Python_codes" + os.sep + "Image" + os.sep + "Data"

new_dir = "js_data"

for dir in os.listdir(original_dir):
    os.mkdir(new_dir + os.sep + dir)
    for file in os.listdir(original_dir+os.sep+dir):
        im = Image.open(original_dir+os.sep+dir+os.sep+file)
        im.save(new_dir + os.sep + dir+ os.sep+ file[0:-4]+".jpg")