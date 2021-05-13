package com.gys.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.github.pagehelper.PageHelper;
import com.gys.entity.Address;
import com.gys.entity.AddressExample;
import com.gys.entity.Cities;
import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;
import com.gys.entity.GoodsGwc;
import com.gys.entity.GoodsGwcList;
import com.gys.entity.GoodsType;
import com.gys.entity.GoodsTypeExample;
import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.Provinces;
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;
import com.gys.entity.UserMessage;
import com.gys.entity.Users;
import com.gys.entity.UsersExample;
import com.gys.entity.UsersExample.Criteria;
import com.gys.service.AddressService;
import com.gys.service.CitiesService;
import com.gys.service.GoodsService;
import com.gys.service.GoodsTypeService;
import com.gys.service.OrdersService;
import com.gys.service.ProvincesService;
import com.gys.service.SupplierService;
import com.gys.service.UserMessageService;
import com.gys.service.UsersService;
import com.gys.util.CookieUtil;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;
import com.gys.util.UserConstants;

//http://localhost:8080/GysManagerSystem/user/index
//http://localhost:8080/GysManagerSystem/user/test?a=0

@Controller
public class UsersController {

	@Autowired
	private UsersService usersService;

	@Autowired
	private GoodsService goodsService;
	
	@Autowired
	private OrdersService ordersService;
	
	@Autowired
	private  AddressService  addressService;
	
	@Autowired
	private ProvincesService provinceService;
	
	@Autowired
	private  CitiesService  citiesService;
	@Autowired
	private   SupplierService  supplierService;
	@Autowired
	private   GoodsTypeService  goodsTypeService;
	 
	@Autowired
	private   UserMessageService  userMessageService;
	

	//  客户留言页地址
	@RequestMapping("/userMessage")
	public String userMessage() {
		
		return "user/settings/userMessage";
	}
	@RequestMapping("/userMessage.action")
	public String userMessageAdd(UserMessage userMessage) {
		System.out.println("12323");
		userMessage.setTime(new Date());
		 
		userMessageService.insertSelective(userMessage);
		
		return "redirect:/userMessage";
	}
	//  支付成功页地址
	@RequestMapping("/lastPage.action")
	public String lastPage(Integer addressId) {
		 
		return "user/goods/lastPage";
	}
	
	
	// 首页跳转：到确认订单页面
	@RequestMapping("/pay.action")
	public String pay(HttpServletRequest request ,HttpSession session,HttpServletResponse response,Integer addressId, Model model) {
		String cookie = null;
		
		try {
			cookie = CookieUtil.getCookie(request, "GWC");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		GoodsGwcList goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
		});
		Users user = (Users)session.getAttribute("myuser");
		usersService.createOrder(goodsGwcList,addressId,user);
	 
		 try {//清空购物车
				 CookieUtil.setCookie(response, "GWC", "", 0);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		return "redirect:/lastPage.action";
	}
//  删除收货地址
	@RequestMapping("/userDeleteAddress.action")
	public String userDeleteAddress(Integer addressId,HttpSession session) {
	    Address address = new Address();
	    address.setAddressId(addressId);
		address.setZt(1);
		addressService.updateByPrimaryKeySelective(address);
		
		return "redirect:/manageAddress";
	}
//  删除购物车地址
	@RequestMapping("/removeShopCar")
	public String removeShopCar(Integer goodsId,HttpServletResponse response,Model model,HttpServletRequest request) {
					 //移除购物车
			        String cookie = null;
			        List<GoodsGwc> goodsGwcList2=null;
			        GoodsGwcList goodsGwcList  =null;
			        int size=0;
			       BigDecimal newZongjia = new BigDecimal(0); 
					try {
						cookie = CookieUtil.getCookie(request, "GWC");
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					if(cookie!=null) {
						 goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
						});
						  
						goodsGwcList2 = goodsGwcList.getGoodsGwcList();
						
						int i=0;
						int index=-1;
						for (GoodsGwc goodsGwc : goodsGwcList2) {
							
							if(goodsGwc.getGoods().getGoodsId()==goodsId) {
								
								index=i;
							}else {
								BigDecimal allPrice = goodsGwc.getAllPrice();
								 newZongjia= newZongjia.add(allPrice); 
							}
							i++;
						}
						if(index!=-1) {
							System.out.println("移除");
							goodsGwcList2.remove(index);
						}
						goodsGwcList.setGoodsGwcList(goodsGwcList2);
						goodsGwcList.setZongjiaPrice(newZongjia);
						  size = goodsGwcList2.size();
					}
					 
					String jsonString = JSONObject.toJSONString(goodsGwcList);
					System.out.println(jsonString);
					try { 
						if(size==0) {
							 CookieUtil.setCookie(response, "GWC", "",0);
							
						}else {
						
						 CookieUtil.setCookie(response, "GWC", jsonString);}
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
	 
			return "redirect:/shopCar";			
					 
	}
	
	//  添加收货地址
	@RequestMapping("/userAddAddress.action")
	public String userAddAddress(Address address,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		address.setUserId(user.getUserId());
		address.setZt(0);
		addressService.insertSelective(address);
		
		return "redirect:/accounts.action";
	}
	//  添加收货地址2
	@RequestMapping("/userAddAddress2.action")
	public String userAddAddress2(Address address,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		address.setUserId(user.getUserId());
		address.setZt(0);
		addressService.insertSelective(address);
		
		return "redirect:/manageAddress";
	}
	// 首页跳转：到注册页面
	@RequestMapping("/register")
	public String register() {
		return "user/register";
	}
	// 首页跳转：到设置页面
	@RequestMapping("/settings.action")
	public String settings(Model model,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		if(user!=null) {
			OrdersExample ordersExample = new OrdersExample();
			com.gys.entity.OrdersExample.Criteria criteria = ordersExample.createCriteria();
			criteria.andUserIdEqualTo(user.getUserId());
			ordersExample.setOrderByClause("id desc");
	 		List<Orders> ordersList = ordersService.selectByExample(ordersExample);
	 		model.addAttribute("ordersList", ordersList);
		}
		 
		return "user/settings/settingsindex";
	}
	// 首页跳转：到修改页面
	@RequestMapping("/updateInf")
	public String updateInf(Model model,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		if(user!=null) {
			 UsersExample usersExample = new UsersExample();
			 Criteria criteria = usersExample.createCriteria();
			 criteria.andUserIdEqualTo(user.getUserId());
			 List<Users> userList = usersService.selectByExample(usersExample);
			 user= userList.get(0);
			 model.addAttribute("userInf",user);
		}
		 
		return "user/settings/updateInf";
	}
	// 首页跳转：到收货地址页面
	@RequestMapping("/manageAddress")
	public String manageAddress(Model model,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		if(user!=null) {
			UsersExample usersExample = new UsersExample();
			Criteria criteria = usersExample.createCriteria();
			criteria.andUserIdEqualTo(user.getUserId());
			List<Users> userList = usersService.selectByExample(usersExample);
			user= userList.get(0);
			model.addAttribute("userInf",user);
		}
		
		return "user/settings/manageAddress";
	}
	// 首页跳转：修改收货地址页
	@RequestMapping("/updateAddress")
	public String updateAddress(Model model,Integer addressId) {
		Address address = addressService.selectByPrimaryKey(addressId);
		List<Provinces> provinces = provinceService.selectProvinces();
		List<Cities> city = citiesService.selectCities();
		model.addAttribute("address",address);
		model.addAttribute("provinceList",provinces);
		model.addAttribute("cityList",city);
		return "user/settings/updateAddress";
	}
	// 首页跳转：修改收货地址页
	@RequestMapping("/updateAddress.action")
	public String updateAddress(Model model,Address address) {
		addressService.updateByPrimaryKeySelective(address);
		return "redirect:/manageAddress";
	}
	// 修改 个人信息
	@RequestMapping("/updateInf.action")
	public String updateInf(HttpServletRequest request,Users user,Model model,@RequestParam(required=false,name="usersPhotoFile") MultipartFile usersPhotoFile) { 
	    
		if(usersPhotoFile!=null) {
			System.out.println("zzzzzz");
			 String photoName = fileUploadSet(  usersPhotoFile, request);
			user.setUserPhoto(photoName);
			}
		
 		usersService.updateByPrimaryKeySelective(user);
		return "redirect:/updateInf";
	}
	// 首页跳转：到修改密码页面
	@RequestMapping("/updatePwd")
	public String updatePwd(Model model,HttpSession session) {
		Users user = (Users) session.getAttribute("myuser");
		if(user!=null) {
			 UsersExample usersExample = new UsersExample();
			 Criteria criteria = usersExample.createCriteria();
			 criteria.andUserIdEqualTo(user.getUserId());
			 List<Users> userList = usersService.selectByExample(usersExample);
			 user= userList.get(0);
			 model.addAttribute("userInf",user);
		}
		return "user/settings/updatePwd";
	}
	// 修改密码
	@RequestMapping("/cherkAJAXforPwd.action")
	@ResponseBody
	public String cherkAJAXforPwd(Integer userId,String bePwd) {
		UsersExample usersExample = new UsersExample();
		Criteria criteria = usersExample.createCriteria();
		criteria.andUserIdEqualTo(userId);
//		 criteria.andPasswordEqualTo(password_salt_2);
		List<Users> userList = usersService.selectByExample(usersExample);
		Users userFind = userList.get(0);
		String password = userFind.getPassword();
		String salt = userFind.getPasswordSalt();
		
		String password_salt_2 = new Md5Hash(bePwd,salt, 2).toString();
		
		
		
		if(!password.equals(password_salt_2)){
			if(bePwd==null||bePwd.equals("")) {
				return "0";
			}else {
			return "1";
			}
		} else {
			
			 
				return "2";
			 
		
	      }
		 
		
		}
	// 修改密码
	@RequestMapping("/updatePwd.action")
	public String updatePwd(Model model,Users user) {
		  
		System.out.println(user);
	 		 
	 
			 //散列2次
			String password = user.getPassword();
			UUID randomUUID = UUID.randomUUID();
			String salt = randomUUID.toString().replaceAll("-", "").substring(4, 8);

			String password_salt_2 = new Md5Hash(password, salt, 2).toString();
			System.out.println("散列2次：" + password_salt_2);
			user.setPassword(password_salt_2);
			user.setPasswordSalt(salt);
			usersService.updateByPrimaryKeySelective(user); 
			 
		 
		
		return "forward:/updatePwd";
	}
	// 首页跳转：到注册页面
	@RequestMapping("/doRegister")
	public String  doRegister(Users user) {
		user.setUserPhoto("moren.jpg");
		 usersService.addUser(user,"2");
		 
		return "forward:/admin/login.action";
	}

	// 首页跳转：到商品页面
	@RequestMapping("/goodsDetail")
	public String goodsDetail(Integer goodsId, Model model) {
		 GoodsExample goodsExample = new GoodsExample();
	    	List<Goods> goodsList2 = goodsService.selectByExample(goodsExample);
			SupplierExample supplierExample  = new SupplierExample();
			List<Supplier> supplierList = supplierService.selectByExample(supplierExample);
			GoodsTypeExample goodsTypeExample = new GoodsTypeExample();
			List<GoodsType> goodsTypeList = goodsTypeService.selectByExample(goodsTypeExample);
			
			 System.out.println("goodsList2:"+goodsList2);
		 
			model.addAttribute("goodsTypeList", goodsTypeList);
			model.addAttribute("goodsList2", goodsList2);
			model.addAttribute("supplierList", supplierList);
		Goods goods = goodsService.selectByPrimaryKey(goodsId);
		model.addAttribute("goods", goods);
		return "user/goods/goodsDetail";
	}

	// 首页跳转：到购物车页面
	@RequestMapping("/shopCar")
	public String shopCar(HttpServletRequest request, Model model) {
		String cookie = null;

		try {
			
			cookie = CookieUtil.getCookie(request, "GWC");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
if(cookie!=null){
		GoodsGwcList goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
		});
		System.out.println("123" + goodsGwcList);
		List<GoodsGwc> list = goodsGwcList.getGoodsGwcList();
		BigDecimal zongjiaPrice = goodsGwcList.getZongjiaPrice();
		
		model.addAttribute("zongjia", zongjiaPrice);
		model.addAttribute("goodsGwcList", list);
		
}else {
	 
	model.addAttribute("msg", "你还没有添加商品到购物车哦");
}
return "user/goods/shopCar";
	}
	// 首页跳转：到确认订单页面
	@RequestMapping("/accounts.action")
	public String accounts(HttpServletRequest request,HttpSession session, Model model) {
		Users user = (Users)session.getAttribute("myuser");
		AddressExample addressExample =new AddressExample();
		com.gys.entity.AddressExample.Criteria criteria = addressExample.createCriteria();
		criteria.andUserIdEqualTo(user.getUserId());
		List<Address> selectByExample = addressService.selectByExample(addressExample);
		 
		model.addAttribute("thisAddressList",selectByExample);
		
		
		String cookie = null;
		
		try {
			cookie = CookieUtil.getCookie(request, "GWC");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(cookie!=null) {
			
			GoodsGwcList goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
			});
			List<GoodsGwc> list = goodsGwcList.getGoodsGwcList();
			BigDecimal zongjiaPrice = goodsGwcList.getZongjiaPrice();
			
			model.addAttribute("zongjia", zongjiaPrice);
			model.addAttribute("goodsGwcList", list);
			return "user/goods/accounts";
     	}
		return "redirect:/shopCar";
	}

	// 首页跳转：添加到购物车
	//Ajax
	@RequestMapping(value = "/addshop.action", produces = "application/json; charset=utf-8")
	public void addshop(HttpServletResponse response, HttpServletRequest request, Integer goodsId, Integer goodsnum,
			Model model) throws UnsupportedEncodingException {
       System.out.println("ok");
        System.out.println("goodsId"+goodsId);
       System.out.println("goodsnum="+goodsnum);

		Goods goods = goodsService.selectByPrimaryKey(goodsId);
		System.out.println(goodsId);
		System.out.println(goodsnum);
		  BigDecimal zongjia = gwcAdd(response, request, goodsId, goodsnum, goods);

		
	 try {
			PrintWriter out = response.getWriter();
			out.print(zongjia+"");
			out.flush();
			out.close();

		} catch (IOException e) {
			e.printStackTrace();
		} 

	}
	//Ajax
	@RequestMapping(value = "/checkAJAX", produces = "application/json; charset=utf-8")
	@ResponseBody
	public int checkAJAX(HttpServletResponse response, HttpServletRequest request, String name, Integer goodsnum,
			Model model) {
		UsersExample userExample = new UsersExample();
		Criteria criteria = userExample.createCriteria();
		criteria.andUsernameEqualTo(name);
		 List<Users> userList = usersService.selectByExample(userExample);
		if(userList.isEmpty()) {
			return 0;
		}else {
			return 1;
		}
		
		  
		
	}
	 
	
//提交订单
	@RequestMapping(value = "/submitTrade.action", produces = "application/json; charset=utf-8")
	public String submitTrade(HttpServletRequest request) {
		//把购物车的商品放入订单中
		String cookie = null;
		try {
			cookie = CookieUtil.getCookie(request, "GWC");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		GoodsGwcList goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
		});
		 
		return cookie;
	}
	
	
	@RequestMapping(value = "/aa", produces = "application/json; charset=utf-8")
	public void addshopa(HttpServletRequest request) {

		String cookie = null;
		try {
			cookie = CookieUtil.getCookie(request, "GWC");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(cookie);
		GoodsGwcList goodsGwcList = JSONObject.parseObject(cookie, new TypeReference<GoodsGwcList>() {
		});
		System.out.println(goodsGwcList);
	}

	// 首页跳转：到商品页面
	@RequestMapping("/findgoods.action")
	public String findgoods(String goodsname, Model model,Integer pageNo) {
		 GoodsExample goodsExample = new GoodsExample();
	    	List<Goods> goodsList2 = goodsService.selectByExample(goodsExample);
			SupplierExample supplierExample  = new SupplierExample();
			List<Supplier> supplierList = supplierService.selectByExample(supplierExample);
			GoodsTypeExample goodsTypeExample = new GoodsTypeExample();
			List<GoodsType> goodsTypeList = goodsTypeService.selectByExample(goodsTypeExample);
			
			 System.out.println("goodsList2:"+goodsList2);
		 
			model.addAttribute("goodsTypeList", goodsTypeList);
			model.addAttribute("goodsList2", goodsList2);
			model.addAttribute("supplierList", supplierList);
			
			 if (pageNo == null||pageNo==0) {
					pageNo = 1;
				} 
				
			     PageHelper.startPage(pageNo, 12); 
			
			
		List<Goods> goodsList = goodsService.findGoodsList(goodsname);
		int size = goodsService.findGoodsList(goodsname).size() ;
		MyPageUtil.myPageUtil(pageNo, model, goodsList);
		
		model.addAttribute("findGoodsSize", size);
		model.addAttribute("goodsList", goodsList);
		if(goodsname==null||goodsname.equals("")) {
			String goodsname2="001a";
			model.addAttribute("goodsname2", goodsname2);
		}
		model.addAttribute("goodsname", goodsname);
		
		return "user/goods/findgoods";
	}

	// 跳转：到用户信息页面
	@RequestMapping("/usersList")
	public String usersList(Integer pageNo, Model model) {

		/* 分页开始 */

		if (pageNo == null) {
			pageNo = 1;
		}

		Integer pageSize = 8;
		List<Users> usersList = usersService.selectUsersByRoleIdPage(pageNo, pageSize, 2);
		int userAllCount = usersService.getUserByRoleIdis2AllCount(2);
		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, userAllCount);
		model.addAttribute("usersList", usersList);
		/* 分页结束 */

		return "/admin/user/usersList";
	}

	// 首页跳转：到用户修改信息页面
	@RequestMapping("/user/updateUser")
	public String updateUser() {
		return "user/updateUser";
	}

	// 首页跳转：到用户修改信息页面
	@RequestMapping("user/error")
	public String error() {
		return "user/error";
	}

	// 用户修改信息
	@RequestMapping("/user/updateUser.action")
	public String updateUser(Users user, @RequestParam("userPhotoFile") MultipartFile userPhotoFile,
			HttpServletRequest requset, HttpSession session, Model model) {

		System.out.println(userPhotoFile);
		// 文件名userPhotoFile
		if (!userPhotoFile.isEmpty() && userPhotoFile.getSize() > 0) {
			// 获得上存文件的原始名称
			String originalFilename = userPhotoFile.getOriginalFilename();
			// 设置上传文件的保存地址目录
			String dirPath = requset.getServletContext().getRealPath("/graduated_design01/WebContent/img/userPhoto/");
			File filePath = new File(dirPath);
			if (!filePath.exists()) {
				filePath.mkdirs();
			}

			try {
				// 使用MultipartFile接口方法，完成文件上传到指定位置
				userPhotoFile.transferTo(new File(dirPath + originalFilename));
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			// 从session获得useId
			Users userSe = (Users) session.getAttribute(UserConstants.USER_SESSION);
			// 把useId传进要修改的User
			user.setUserId(userSe.getUserId());
			// 把图片名称传到user对象
			String userPhoto = originalFilename;

			user.setUserPhoto(userPhoto);

			usersService.updateByPrimaryKey(user);

			return "user/success";
		} else {
			return "user/error";
		}

	}

	// 以userid查询所有信息
	@RequestMapping("/user/findUserId")
	public String selectByPrimaryKey(Integer userId, Model model) {
		Users user = usersService.selectByPrimaryKey(userId);
		model.addAttribute("user", user);
		return "user/user";
	}

	// 注册：
	@RequestMapping("/user/register.action")
	public String register(Users user, Model model) {
		/*
		 * 时间测试 System.out.println(birthdayIn); user.setRoleId(2); // Calendar cl =
		 * Calendar.getInstance(); // String birth = formatter.format(cl.getTime());
		 * SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		 * 
		 * // System.out.println(birth); // 从0开始parse ParsePosition pos = new
		 * ParsePosition(0); // 按照"yyyy-MM-dd"格式赋值给datetime Date date =
		 * formatter.parse(birthdayIn, pos); // System.out.println(datetime);
		 * user.setBirthday(date);
		 */
		if (user != null) {
			usersService.insertSelective(user);
			return "user/success";
		} else {
			return "user/error";
		}

	}
	public BigDecimal gwcAdd(HttpServletResponse response, HttpServletRequest request, Integer goodsId, Integer goodsnum,
			Goods goods) {
		boolean flag = false;
		boolean flag2 = false;
		BigDecimal zongjia=new BigDecimal(0);
		try {
			String GoodsList = CookieUtil.getCookie(request, "GWC");
			System.out.println(GoodsList);
			// 是否存在购物车
			if (GoodsList != null) {
				System.out.println("存在购物车");
				GoodsGwcList goodsGwcList = JSONObject.parseObject(GoodsList, new TypeReference<GoodsGwcList>() {
				});
				 
				List<GoodsGwc> goodsGwcList2 = goodsGwcList.getGoodsGwcList();
				
				for (GoodsGwc goodsGwc : goodsGwcList2) {
					if (goodsId == goodsGwc.getGoods().getGoodsId()) {
						flag = true;
						if (goodsnum == goodsGwc.getNum()) {
							flag2 = true;
						}
					}
					
				}
				
				if (flag == true) {// 如果购物车存在此商品
					
					System.out.println("存在此商品");
					if (flag2 != true) {// 数量不同，修改数量
						System.out.println("数量不相同");
						BigDecimal price = goods.getPrice();
						BigDecimal goodsnum1 = new BigDecimal(goodsnum);
						BigDecimal multiply = price.multiply(goodsnum1);
						
						System.out.println("小计" + multiply);
						List<GoodsGwc> goodsGwcListNew = new ArrayList<>();
						zongjia=new BigDecimal(0);
						for (GoodsGwc goodsGwc : goodsGwcList2) {
							if (goodsId == goodsGwc.getGoods().getGoodsId()) {
								goodsGwc.setNum(goodsnum);
								goodsGwc.setAllPrice(multiply);
								goodsGwcListNew.add(goodsGwc);
								
							} else {
								goodsGwcListNew.add(goodsGwc);
								
							}
							//重新算总价
							BigDecimal allPrice = goodsGwc.getAllPrice();
							zongjia=zongjia.add(allPrice);
						}
						
						GoodsGwcList goodsGwcList1 = new GoodsGwcList();
						goodsGwcList1.setZongjiaPrice(zongjia);
						goodsGwcList1.setGoodsGwcList(goodsGwcListNew);
						String jsonString = JSONObject.toJSONString(goodsGwcList1);
						try {
							CookieUtil.setCookie(response, "GWC", jsonString);
						} catch (UnsupportedEncodingException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						
					}else {
						System.out.println("数量相同");
					}
					
				} else {// 如果购物车不存在此商品，添加到购物车
					
					System.out.println("不存在此商品");
					BigDecimal price = goods.getPrice();
					BigDecimal goodsnum1 = new BigDecimal(goodsnum);
					BigDecimal multiply = price.multiply(goodsnum1);
					
					System.out.println("小计" + multiply);
					GoodsGwc gwc = new GoodsGwc();
					goods.setGoodsType(null);
					goods.setSupplier(null);
					gwc.setGoods(goods);
					gwc.setNum(goodsnum);
					// 小计
					gwc.setAllPrice(multiply);
//					List<GoodsGwc> goodsGwcListNew = new ArrayList<>();
					goodsGwcList2.add(gwc);
					
					
					zongjia=new BigDecimal(0);
					for (GoodsGwc goodsGwc : goodsGwcList2) {//重新算总价
						
						BigDecimal allPrice = goodsGwc.getAllPrice();
						zongjia=zongjia.add(allPrice);
						System.out.println(zongjia);
						
					}
					
					GoodsGwcList goodsGwcList1 = new GoodsGwcList();
					goodsGwcList1.setGoodsGwcList(goodsGwcList2);
					goodsGwcList1.setZongjiaPrice(zongjia);
					System.out.println("goodsGwcList1======"+goodsGwcList1);
					
					String jsonString = JSONObject.toJSONString(goodsGwcList1);
					System.out.println(jsonString);
					
					try {
						CookieUtil.setCookie(response, "GWC", jsonString,60 * 60 * 24*7);
					} catch (UnsupportedEncodingException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
			} else {
				System.out.println("不存在购物车1");
				BigDecimal price = goods.getPrice();
				BigDecimal goodsnum1 = new BigDecimal(goodsnum);
				BigDecimal multiply = price.multiply(goodsnum1);
				
				System.out.println("小计" + multiply);
				
				GoodsGwc gwc = new GoodsGwc();
				goods.setGoodsType(null);
				goods.setSupplier(null);
				gwc.setGoods(goods);
				gwc.setNum(goodsnum);
				// 小计
				gwc.setAllPrice(multiply);
				
				List<GoodsGwc> list = new ArrayList<>();
				list.add(gwc);
				
				GoodsGwcList goodsGwcList1 = new GoodsGwcList();
				goodsGwcList1.setGoodsGwcList(list);
				goodsGwcList1.setZongjiaPrice(multiply);
				String jsonString = JSONObject.toJSONString(goodsGwcList1);
				/*
				 * System.out.println(jsonString); GoodsGwcList goodsGwcList =
				 * JSONObject.parseObject(jsonString, new TypeReference<GoodsGwcList>() {});
				 * System.out.println("wode"+goodsGwcList);
				 */
				
				try {
					CookieUtil.setCookie(response, "GWC", jsonString);
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		return zongjia;
	}
	
	
	private String fileUploadSet(  MultipartFile goodsPhotoFile, HttpServletRequest request) {
		if (!goodsPhotoFile.isEmpty() && goodsPhotoFile.getSize() > 0) {
			// 获得上存文件的原始名称
			String originalFilename = goodsPhotoFile.getOriginalFilename();
			// 设置上传文件的保存地址目录

			String dirPath = "D:/Graduated_DesignFile/img/user/";

			File filePath = new File(dirPath);

			if (!filePath.exists()) {

				filePath.mkdirs();
			}

			try {
				// 使用MultipartFile接口方法，完成文件上传到指定位置
				goodsPhotoFile.transferTo(new File(dirPath + originalFilename));
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			// 把图片名称传到good对象
			String photoName =  originalFilename;
			return photoName ;
			
		}else {
		return null;
		}
	}
 
}
