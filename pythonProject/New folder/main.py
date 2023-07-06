import cv2
import numpy as np

def remove_green_screen(image, background_image):
    # Convert images to numpy arrays
    image = np.array(image)
    background_image = np.array(background_image)

    # Create a copy of the original image
    result = image.copy()

    # Define the green color range (adjust these values according to your green screen)
    lower_green = np.array([0, 100, 0])
    upper_green = np.array([100, 255, 100])

    # Create a mask for the green screen area
    mask = cv2.inRange(image, lower_green, upper_green)

    # Invert the mask to select the non-green areas
    mask_inv = cv2.bitwise_not(mask)

    # Convert the mask to 3 channels to match the image channels
    mask_inv_rgb = cv2.cvtColor(mask_inv, cv2.COLOR_GRAY2BGR)

    # Extract the non-green areas from the original image
    foreground = cv2.bitwise_and(image, mask_inv_rgb)

    # Extract the green screen area from the background image
    background = cv2.bitwise_and(background_image, mask_inv_rgb)

    # Combine the foreground and background to get the final result
    result = cv2.add(foreground, background)

    return result

# Load the green screen image
green_screen_image = cv2.imread(r"C:\Users\kelvi\Desktop\New folder\New folder\Green-Screen-Lighting.jpg")

# Load the background image
background_image = cv2.imread(r"C:\Users\kelvi\Pictures\photo_2022-10-11_19-48-42.jpg")

# Remove the green screen and replace it with the background
result_image = remove_green_screen(green_screen_image, background_image)

# Display the result
cv2.imshow('Result', result_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
