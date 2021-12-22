// 邮箱校验
export const EmailReg =
  /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/

// 统一社会码验证
export const SocialCodeReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 固定电话验证
export const Telephone = /^((0\d{2,3}-\d{7,8}))$/

// 手机号校验
export const PhoneReg = /^1[3456789]\d{9}$/

// 详细手机号验证
export const DetailpPhoneReg =
  /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/

/**
 * 用户名验证
 * 6-16位的包含大小写字母、数字、特殊符号- _ 的用户名
 */
export const UserNameReg = /^[a-zA-Z0-9_-]{6,16}$/

/**
 * 严格用户名验证
 * 6-20位字母和数字和_-组合
 */
export const DetailUserNameReg =
  /^(?![-_]+$)(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z-_]{6,20}$/

// 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const PasswordrReg =
  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/

// 请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种
export const PassReg =
  /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/

// 合法url校验
export const UrlReg = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/

// 严格合法url校验
export const DetailUrlReg =
  /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
