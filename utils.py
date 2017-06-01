import json


def from_json(str):
    return json.loads(str)


def read_str(file='out.json'):
    with open(file, 'r') as f:
        data = f.read()
    return data
