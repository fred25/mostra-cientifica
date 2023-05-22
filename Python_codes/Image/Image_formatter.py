import cv2
import os

class Image_formatter:
    
    #start the class setting the image height and width
    def __init__(self, IMG_WIDTH, IMG_HEIGHT) -> None:
        self.IMG_WIDTH  = IMG_WIDTH
        self.IMG_HEIGHT = IMG_HEIGHT
    
    def load_data(self, dir):
        """
        Function that receive a dir and return two lists
        images = list of Images in the directory in "dir"
        labels = ordered labels for the upper list data, from the directory name
        """    
        print("loading")
        path = data_dir
        images = []
        labels = []
        for dir in os.listdir(path):
            actual_dir = os.path.join(path, dir)
            print(dir, "-------------------------------------------------------------")
            for img in os.listdir(actual_dir):
                print(dir + img)
                image = cv2.imread(os.path.join(actual_dir, img), cv2.IMREAD_COLOR)
                resized_image = cv2.resize(image, (self.IMG_WIDTH, self.IMG_HEIGHT))
                images.append(resized_image)
                labels.append(int(dir))
        return images, labels

obj = Image_formatter(10, 10)