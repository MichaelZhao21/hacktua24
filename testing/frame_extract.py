import cv2

vidcap = cv2.VideoCapture("testing.mp4")
success, image = vidcap.read()
count = 0

while success:
  cv2.imwrite("frames/frame%d.jpg" % count, image)     # save frame as JPEG file      
  success,image = vidcap.read()
  image.shape
  print('Read a new frame: ', success, count)
  count += 1
  if count > 1000:
    break
