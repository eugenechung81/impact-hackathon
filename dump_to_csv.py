import utils

dfg = utils.from_json(utils.read_str('samples/loop/dfg/5.json'))
edges = dfg.get('linkList')
for e in edges:
    print '%s,%s,Directed' % (e.get('from').get('nodeIdInCurrentGraph'), e.get('to').get('nodeIdInCurrentGraph'))
    # print e.get('from').get('nodeIdInCurrentGraph')
    # print e.get('to').get('nodeIdInCurrentGraph')
