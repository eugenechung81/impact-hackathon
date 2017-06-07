from os import listdir
from os.path import isfile, join
import utils

dfg = utils.from_json(utils.read_str('HackathonJune2017/samples/loop/dfg/5.json'))
edges = dfg.get('linkList')
for e in edges:
    print '%s,%s,Directed' % (e.get('from').get('nodeIdInCurrentGraph'), e.get('to').get('nodeIdInCurrentGraph'))
    # print e.get('from').get('nodeIdInCurrentGraph')
    # print e.get('to').get('nodeIdInCurrentGraph')


nodes = dfg.get('nodeList')
json_str = ''
for n in nodes:
    print ','.join([
        n.get('key'),
        n.get('category'),
        n.get('text'),
        n.get('description')[0],
        str(n.get('forwardDepth')),
        str(n.get('backwardDepth')),
        str(n.get('topoIndex')),
        n.get('codeReference').get('fileName'),
        str(n.get('codeReference').get('lineStart')),
        str(n.get('codeReference').get('lineEnd')),
    ])

###
# poker output - small

dfg = utils.from_json(utils.read_str('HackathonJune2017/samples/poker/dfg/1285.json'))
edges = dfg.get('linkList')
for e in edges:
    print ','.join([
        e.get('from').get('nodeIdInCurrentGraph'),
        e.get('to').get('nodeIdInCurrentGraph'),
        'Directed',
        dfg.get('meta').get('methodName')
    ])
    if e.get('to').get('nodeIdInCalledGraph'):
        print ','.join([
            e.get('from').get('nodeIdInCurrentGraph'),
            e.get('to').get('nodeIdInCalledGraph'),
            'Directed',
            dfg.get('meta').get('methodName')
        ])

def get_nodes_csv(dfg):
    nodes = dfg.get('nodeList')
    for n in nodes:
        print ','.join([
            n.get('key'),
            n.get('category'),
            n.get('text'),
            n.get('description')[0],
            str(n.get('forwardDepth')),
            str(n.get('backwardDepth')),
            str(n.get('topoIndex')),
            n.get('codeReference').get('fileName'),
            str(n.get('codeReference').get('lineStart')),
            str(n.get('codeReference').get('lineEnd')),
        ])

get_nodes_csv(dfg)


###
# poker - big

file_names = [f for f in listdir('HackathonJune2017/samples/poker/dfg/') if isfile(join('HackathonJune2017/samples/poker/dfg/', f))]

# json_list = ['1285', '1346', '1354', '1387']
# dfg = utils.from_json(utils.read_str('HackathonJune2017/samples/poker/dfg/1285.json'))

def get_edges_csv(dfg):
    edges = dfg.get('linkList')
    lines = []
    for e in edges:
        lines.append(','.join([
            e.get('from').get('nodeIdInCurrentGraph'),
            e.get('to').get('nodeIdInCurrentGraph'),
            'Directed',
            dfg.get('meta').get('methodName')
        ]))
        if e.get('to').get('nodeIdInCalledGraph'):
            lines.append(','.join([
                e.get('from').get('nodeIdInCurrentGraph'),
                e.get('to').get('nodeIdInCalledGraph'),
                'Directed',
                dfg.get('meta').get('methodName')
            ]))
    utils.write_str('\n'.join(lines), 'edges.csv', append=True)


def get_nodes_csv(dfg):
    nodes = dfg.get('nodeList')
    lines = []
    lines.append('Id,Category,Text,Description,ForwardDepth,BackwardDepth,topoIndex,FileName,LineStart,LineEnd,MethodName')
    for n in nodes:
        lines.append(','.join([
            n.get('key'),
            n.get('category'),
            n.get('text'),
            n.get('description')[0],
            str(n.get('forwardDepth')),
            str(n.get('backwardDepth')),
            str(n.get('topoIndex')),
            n.get('codeReference').get('fileName'),
            str(n.get('codeReference').get('lineStart')),
            str(n.get('codeReference').get('lineEnd')),
            dfg.get('meta').get('methodName')
        ]))
    utils.write_str('\n'.join(lines), 'nodes.csv', append=True)


for f in file_names:
    dfg = utils.from_json(utils.read_str('HackathonJune2017/samples/poker/dfg/%s' % f))
    # get_edges_csv(dfg)
    get_nodes_csv(dfg)
