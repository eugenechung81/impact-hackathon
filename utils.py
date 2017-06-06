import json


def from_json(str):
    return json.loads(str)


def read_str(file='out.json'):
    with open(file, 'r') as f:
        data = f.read()
    return data


def write_str(string, file='out.json', append=False):
    flag = 'w'
    if append:
        flag = 'a'

    with open(file, flag) as outfile:
        outfile.write(string)
