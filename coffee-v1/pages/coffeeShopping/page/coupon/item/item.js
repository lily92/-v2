// pages/coffeeShopping/page/coupon/item/item.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		couponList: {
			type: Array
		},
		active:{
			type: String
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
		btnBuy(event){
			console.log(event)
			let id = event.currentTarget.dataset.id
			console.log('优惠券id'+id)
		}
	}
})
