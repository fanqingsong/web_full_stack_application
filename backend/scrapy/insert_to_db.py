import requests

resp = requests.get('http://localhost:3000/api/v1/summary')


# ------------- GET --------------
if resp.status_code != 200:
    # This means something went wrong.
    raise ApiError('GET /tasks/ {}'.format(resp.status_code))

for todo_item in resp.json():
    print('{} {}'.format(todo_item['Technology'], todo_item['Count']))

# ------------- POST --------------
Technology = {"Technology": "Django", "Count": "50" }

resp = requests.post('http://localhost:3000/api/v1/summary', json=Technology)
if resp.status_code != 201:
    raise ApiError('POST /Technologys/ {}'.format(resp.status_code))

print("-------------------")
print(resp.text)


print('Created Technology. ID: {}'.format(resp.json()["_id"]))







