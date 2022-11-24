import {FlatList, View, ListRenderItem} from 'react-native';
import React from 'react';

import TagItem from '../../components/TagItemComponent';
import {tagProps} from '../../components/TagItemComponent';

const TagList = ({tagData}: {tagData: tagProps[]}) => {
  const renderItem: ListRenderItem<tagProps> = ({item}) => (
    <TagItem tagId={item.tagId} tagName={item.tagName} />
  );
  return (
    <View>
      <FlatList data={tagData} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

export default TagList;
