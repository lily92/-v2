// pages/coffeeShopping/page/activity/crowdFunding/index/item/item.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		list: {
			type: Array
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onChange(e) {
			this.setData({
				timeData: e.detail,
			});
		},
	}
})
