# 定义 data 数据 有节点关系 source_id target_id,
def get_json_tree(data, target_id):
    item_array = []
    for node in data:
        logger.info(node.source_id)
        if node.target_id == target_id:
            new_node = dict(id=node.id, content=node.content, source_id=node.source_id, is_title=node.is_title,
                            target_id=node.target_id, label='', children=get_json_tree(data, node.source_id))
            item_array.append(new_node)

    return item_array


# 递归树形节点
def traverse_tree(nodes, _item):
    if not nodes:
        return
    for item in nodes:
        if item['source_id'] == _item[2].source_id:
            item['label'] += (_item[0].word + " ")
        else:
            if item['children'] and len(item['children']):
                traverse_tree(item['children'], _item)
