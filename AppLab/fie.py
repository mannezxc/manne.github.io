import glob, os


# for file in glob.glob("*.svg"):
#     with open(file, "r") as file:
#         print(*file)

for file in glob.glob('*.svg'):
    with open(file, 'r') as f:
        old_data = f.read()

    new_data = old_data.replace('img/png', 'image/png')

    with open(file, 'w') as f:
        f.write(new_data)
    print(file)
