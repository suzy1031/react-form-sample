post1 = Post.create!(name: 'ニャア', neko_type: 'アメリカンショートヘア')
DetailInfo.create!(post: post1, favorite_food: '魚', favorite_toy: '猫じゃらし')

post2 = Post.create!(name: 'まる', neko_type: 'スコッティシュフォールド')
DetailInfo.create!(post: post2, favorite_food: '野菜', favorite_toy: 'まりたん')

post3 = Post.create!(name: 'むぎ', neko_type: 'スコッティシュフォールド')
DetailInfo.create!(post: post3, favorite_food: '肉', favorite_toy: 'ダンボール')
