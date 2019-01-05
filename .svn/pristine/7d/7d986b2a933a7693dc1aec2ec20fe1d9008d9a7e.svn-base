export class Util {
	public static formatTime(format = 'yyyyMMddhhmmssSSS', time = new Date()) {
		var o = {
			'M+': time.getMonth() + 1, //月份
			'd+': time.getDate(), //日
			'h+': time.getHours(), //小时
			'm+': time.getMinutes(), //分
			's+': time.getSeconds(), //秒
			'q+': Math.floor((time.getMonth() + 3) / 3), //季度
			'S+': time.getMilliseconds() //毫秒
		}
		if (/(y+)/.test(format))
			format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(format)) {
				let regLength = RegExp.$1.length
				let valLength = (o[k] + '').length
				while (regLength > valLength) {
					o[k] = '0' + o[k]
					regLength--
				}
				format = format.replace(RegExp.$1, o[k])
			}
		}
		return format
	}
}
