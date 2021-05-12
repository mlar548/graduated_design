package com.gys.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.gys.entity.Goods;
import com.gys.entity.GoodsType;
import com.gys.entity.Logistics;
import com.gys.entity.LogisticsCompany;
import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;
import com.gys.entity.PurchaseExample.Criteria;
import com.gys.entity.Purchasetrade;
import com.gys.entity.Supplier;
import com.gys.entity.UserRoles;
import com.gys.entity.UserRolesExample;
import com.gys.entity.Users;
import com.gys.entity.Warehouse;
import com.gys.entity.WarehouseGoods;
import com.gys.service.GoodsService;
import com.gys.service.LogisticsCompanyService;
import com.gys.service.LogisticsService;
import com.gys.service.PurchaseService;
import com.gys.service.SupplierService;
import com.gys.service.UserRolesService;
import com.gys.service.UsersService;
import com.gys.service.WarehouseGoodsService;
import com.gys.service.WarehouseService;
import com.gys.util.CreateId;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

@Controller
public class PurchaseController {
	@Autowired
	private PurchaseService purchaseService;

	@Autowired
	private GoodsService goodsService;

	@Autowired
	private WarehouseService warehouseService;

	@Autowired
	private WarehouseGoodsService warehouseGoodsService;

	@Autowired
	private LogisticsService logisticsService;

	@Autowired
	private LogisticsCompanyService logisticsCompanyService;

	@Autowired
	private SupplierService supplierService;

	@Autowired
	private UsersService usersService;
	
	@Autowired
	private UserRolesService userRolesService;

	// 页面跳转：到管理供应商页 且把该供应商信息放到该页
	@RequestMapping("/purchaseList")
	@RequiresPermissions("role:purchaseList")
	public String purchase(Integer pageNo, @RequestParam(required=true,defaultValue="0",name="chooseType")Integer chooseType,
			@RequestParam(required=true,defaultValue="0",name="chooseZt")Integer chooseZt,HttpSession session,Model model) {
//按条件查询采购单，查询"待审核"和"未通过"采购单
		PurchaseExample example = new PurchaseExample();
	    Criteria c1=example.createCriteria();
	     
	    Users user = (Users) session.getAttribute("myuser");
	    List<UserRoles> selectUserRolesByUserId = userRolesService.selectUserRolesByUserId(user.getUserId());
	    String roleId = selectUserRolesByUserId.get(0).getRoleId();
	    
	     if(chooseType==0) {
	    	 example.setOrderByClause("id desc");
	     }else if(chooseType==1) {
	    	 example.setOrderByClause("id asc");
	     }else if(chooseType==2) {
	    	 example.setOrderByClause("Status asc");
	     }
	     if(chooseZt==0) {
	    	  
	     }else if(chooseZt==1) {
	    	 c1.andStatusEqualTo("待审核");
	     }else if(chooseZt==2) {
	    	 c1.andStatusEqualTo("未通过");
	     }else if(chooseZt==3) {
		c1.andStatusEqualTo("已完成采购");
	}



	    if(roleId.equals("5")) {
	    	c1.andEmployeeIdEqualTo(user.getUsername());
	    }
	    
	    
	    if (pageNo == null||pageNo==0) {
			pageNo = 1;
		} 
		
	     PageHelper.startPage(pageNo, 8); 
		List<Purchase> selectByExample = purchaseService.selectByExample(example);
		//分页2
		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		model.addAttribute("chooseType", chooseType);
		model.addAttribute("chooseZt", chooseZt);
		
		/*model.addAttribute("prev", prev);
		model.addAttribute("pageNo", pageNo);
		model.addAttribute("allPage", allPage);
		model.addAttribute("next", next);*/
		/*

		Integer pageSize = 8;
		List<Purchase> purchaseList = purchaseService.selectPurchasePage(pageNo, pageSize);

		int purchaseAllCount = purchaseService.getAllCount();

		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, purchaseAllCount);
		model.addAttribute("purchaseList", purchaseList);
*/
		model.addAttribute("purchaseList", selectByExample);
		return "/admin/purchase/purchaseList";
	}

	

	// 页面跳转：到采购页
	@RequestMapping("/purchaseAdd")
	@RequiresPermissions("role:purchaseAdd")
	public String purchaseAdd(Model model, HttpSession session) {
		// 产生随机订单
		CreateId id = new CreateId();
		String createId = id.createId();
		String purchaseId = "P" + createId;
		System.out.println(purchaseId);
		model.addAttribute("purchaseId", purchaseId);
		// 获取当前时间
		Date date = new Date();
		model.addAttribute("date", date);

		// 查找供应商
		List<Supplier> supplierList = supplierService.selectSupplier();
		model.addAttribute("supplierList", supplierList);

		// session获取出单人
		Users user = (Users) session.getAttribute("myuser");
		if (user != null) {
			model.addAttribute("username", user.getUsername());
		}

		List<Users> jlList = usersService.selectUsersByRoleId(6);
		model.addAttribute("jlList", jlList);
		List<Goods> goodsList = goodsService.selectGoods();
		model.addAttribute("goodsList", goodsList);
		List<Warehouse> warehouseList = warehouseService.selectWarehouse();
		model.addAttribute("warehouseList", warehouseList);

		return "/admin/purchase/purchaseAdd";
	}

	// 页面跳转：到修改页
	@RequestMapping("/purchaseUpdate")
	@RequiresPermissions("role:purchaseUpdate")
	public String purchaseUpdate(Integer id, Model model) {
		System.out.println(id);
		Purchase purchase = purchaseService.selectByPrimaryKey(id);
		System.out.println(purchase);
		model.addAttribute("purchase", purchase);
		List<Users> jlList = usersService.selectUsersByRoleId(6);
		model.addAttribute("jlList", jlList);
		List<Goods> goodsList = goodsService.selectGoods();
		model.addAttribute("goodsList", goodsList);
		List<Warehouse> warehouseList = warehouseService.selectWarehouse();
		model.addAttribute("warehouseList", warehouseList);
		
		/*System.out.println(id);
		Purchase purchase = purchaseService.selectByPrimaryKey(id);
		model.addAttribute("purchase", purchase);*/
		/* model.addAttribute("stringDate", stringDate); */

		return "/admin/purchase/purchaseUpdate";
	}

	// 页面跳转：到审核页
	@RequestMapping("/purchasePending")
	@RequiresPermissions("role:purchasePending")
	public String purchasePending( @RequestParam(required=true,defaultValue="0",name="chooseType")Integer chooseType,
			@RequestParam(required=true,defaultValue="0",name="chooseZt")Integer chooseZt,Integer pageNo,HttpSession session, Model model) {

//		PurchaseExample example = new PurchaseExample();
//		Criteria c1 = example.createCriteria();
//		c1.andStatusNotEqualTo("不通过");
////	    c1.andStatusEqualTo("不通过");
//
//	    Users user = (Users) session.getAttribute("myuser");
//	    c1.andJlIdEqualTo(user.getUserId());
//
//
//	    if(chooseType==0) {
//	    	 example.setOrderByClause("id desc");
//	     }else if(chooseType==1) {
//	    	 example.setOrderByClause("id asc");
//	     }else if(chooseType==2) {
//	    	 example.setOrderByClause("Status asc");
//	     }
//		if(chooseZt==0) {
//			c1.andStatusNotEqualTo("已审核");
//		}else if(chooseZt==1) {
//			c1.andStatusEqualTo("待审核");
//		}else if(chooseZt==2) {
//			c1.andStatusEqualTo("未通过");
//		}else if(chooseZt==3) {
//			c1.andStatusEqualTo("已完成采购");
//		}
//
//	     model.addAttribute("chooseType", chooseType);
//			model.addAttribute("chooseZt", chooseZt);
//
//
//		if (pageNo == null||pageNo==0) {
//			pageNo = 1;
//		}
//		  PageHelper.startPage(pageNo, 8);
//			List<Purchase> selectByExample = purchaseService.selectByExample(example);
//		String s = selectByExample.toString();
//		System.out.println("selectByExample的输出为====="+s);
//		//分页2
//			MyPageUtil.myPageUtil(pageNo, model, selectByExample);
//
//
///*		// 获得待处理信息
//		Integer pageSize = 8;
//		List<Purchase> purchaseList = purchaseService.selectPurchasePending(pageNo, pageSize);
//
//		int purchaseAllCount = purchaseService.getAllCountPeng();
//		System.out.println(purchaseAllCount);
//		// 分页
//		PageGoUtil.pageGo(pageNo, model, pageSize, purchaseAllCount);*/
//		model.addAttribute("purchaseList", selectByExample);
		PurchaseExample example = new PurchaseExample();
		Criteria c1=example.createCriteria();
		c1.andStatusNotEqualTo("不通过");

		Users user = (Users) session.getAttribute("myuser");
		List<UserRoles> selectUserRolesByUserId = userRolesService.selectUserRolesByUserId(user.getUserId());
		String roleId = selectUserRolesByUserId.get(0).getRoleId();

		if(chooseType==0) {
			example.setOrderByClause("id desc");
		}else if(chooseType==1) {
			example.setOrderByClause("id asc");
		}else if(chooseType==2) {
			example.setOrderByClause("Status asc");
		}
		if(chooseZt==0) {
			c1.andStatusNotEqualTo("已审核");
		}else if(chooseZt==1) {
			c1.andStatusEqualTo("待审核");
		}else if(chooseZt==2) {
			c1.andStatusEqualTo("未通过");
		}else if(chooseZt==3) {
			c1.andStatusEqualTo("已完成采购");
		}



		if(roleId.equals("5")) {
			c1.andEmployeeIdEqualTo(user.getUsername());
		}


		if (pageNo == null||pageNo==0) {
			pageNo = 1;
		}

		PageHelper.startPage(pageNo, 8);
		List<Purchase> selectByExample = purchaseService.selectByExample(example);
		//分页2
		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		model.addAttribute("chooseType", chooseType);
		model.addAttribute("chooseZt", chooseZt);

		/*model.addAttribute("prev", prev);
		model.addAttribute("pageNo", pageNo);
		model.addAttribute("allPage", allPage);
		model.addAttribute("next", next);*/
		/*

		Integer pageSize = 8;
		List<Purchase> purchaseList = purchaseService.selectPurchasePage(pageNo, pageSize);

		int purchaseAllCount = purchaseService.getAllCount();

		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, purchaseAllCount);
		model.addAttribute("purchaseList", purchaseList);
*/
		model.addAttribute("purchaseList", selectByExample);
		return "/admin/purchase/purchasePending";
	}

	// 跳转到选择物流页
	@RequestMapping("/purchaseLog")
	public String purchaseLog(Integer id, Model model) {
		System.out.println(id);
		Purchase purchase = purchaseService.selectByPrimaryKey(id);
		System.out.println(purchase);
		model.addAttribute("purchase", purchase);
		List<Users> jlList = usersService.selectUsersByRoleId(6);
		model.addAttribute("jlList", jlList);
		List<Goods> goodsList = goodsService.selectGoods();
		model.addAttribute("goodsList", goodsList);
		List<Warehouse> warehouseList = warehouseService.selectWarehouse();
		model.addAttribute("warehouseList", warehouseList);

		/*
		 * // 传入快递公司的数据 List<LogisticsCompany> logisticsCompanyList =
		 * logisticsCompanyService.selectLogisticsCompany();
		 * model.addAttribute("logisticsCompanyList", logisticsCompanyList);
		 * model.addAttribute("purchaseId", purchaseId);
		 */

		return "/admin/purchase/purchaseLog";
	}
	// 跳转到选择物流页
	@RequestMapping("/toPurchasetrade")
	public String toPurchasetrade(Integer id, Model model) {
		System.out.println(id);
		Purchase purchase = purchaseService.selectByPrimaryKey(id);
		System.out.println(purchase);
		model.addAttribute("purchase", purchase);
		List<Users> jlList = usersService.selectUsersByRoleId(6);
		model.addAttribute("jlList", jlList);
		List<Goods> goodsList = goodsService.selectGoods();
		model.addAttribute("goodsList", goodsList);
		List<Warehouse> warehouseList = warehouseService.selectWarehouse();
		model.addAttribute("warehouseList", warehouseList);
		
		/*
		 * // 传入快递公司的数据 List<LogisticsCompany> logisticsCompanyList =
		 * logisticsCompanyService.selectLogisticsCompany();
		 * model.addAttribute("logisticsCompanyList", logisticsCompanyList);
		 * model.addAttribute("purchaseId", purchaseId);
		 */
		
		return "/admin/purchase/purchasetrade";
	}

	// 采购
	@RequestMapping("/purchaseAdd.action")
	public String purchaseAdd(Purchase purchase, Model model) {

		List<Purchasetrade> purchasetradeList = purchase.getPurchasetrade();
		for (Purchasetrade purchasetrade : purchasetradeList) {
			System.out.println(purchasetrade);
		}

//		if (purchase.getType().equals("采购入库")) {// 采购入库
			System.out.println("采购入库------------>");
			  purchaseService.createPurchase(purchase);
			System.out.println(purchase);
/*
		} else {// 直达客户
			System.out.println("直达客户------------>");
			System.out.println(purchase);
		}
*/
		/*
		 * // 查看仓库是否有该商品没有则先创建，并设余量为0 Integer goodsId = purchase.getGoodsId(); Integer
		 * warehouseId = purchase.getWarehouseId();
		 * 
		 * WarehouseGoods warehouseGoods =
		 * warehouseGoodsService.selectWarehouseGoodsByGoodsIdWarehouseId(goodsId,
		 * warehouseId); if (warehouseGoods == null) {
		 * warehouseGoodsService.insertNew(goodsId, warehouseId);
		 * System.out.println("=====没有信息，创建====="); } // 产生一个采购
		 * purchaseService.insertSelective(purchase);
		 */
		// 跳转到待处理信息页面

		// return "redirect:/purchasePending";
		return "redirect:/purchaseAdd";
	}

	// 删除待采购信息
	@RequestMapping("/purchaseDelete.action")
	@RequiresPermissions("role:purchaseDelete.action")
	public String purchaseDelete(Integer purchaseId, Model model) {

		purchaseService.deleteByPrimaryKey(purchaseId);
		return "redirect:/purchasePending";
	}

	// 修改采购
	@RequestMapping("/purchaseUpdate.action")
	public String purchaseUpdate(Purchase purchase, Model model) {

		System.out.println("修改采购"+purchase);
		
		 purchaseService.updatePurchaseAndTradeByPrimaryKeySelective(purchase); 

		return "redirect:/purchaseList";
	}

	// 选择审批处理页
	@RequestMapping("/purchaseLog.action")
	public String purchaseLogDo(Integer id,Purchase purchase, Model model) {
		Purchase purchaseFind = purchaseService.selectByPrimaryKey(id);
		System.out.println(purchaseFind.getOther());
		if (purchase.getOther() == null || purchase.getOther().equals("")) {
			//通过执行的方法
			System.out.println("通过：");
			 purchaseService.passPurchaseAndLog(purchaseFind); 
			 
		} else { 
			//不通过通过执行的方法
			System.out.println("不通过：");
			
			
			purchaseService.notPassPurchaseAndLog(purchase);
		}

		/*
		 * // 选择快递：修改物流信息 String logisticsName = logisticsCompany.getLogisticsName();
		 * Logistics logistics =
		 * logisticsService.selectLogisticsByPurchaseId(purchaseId);
		 * 
		 * logistics.setLogisticsName(logisticsName);
		 * logistics.setToWarehouseId(warehouseId); int row =
		 * logisticsService.updateByPrimaryKeySelective(logistics);
		 * 
		 * if (row != 0) { System.out.println("修改成功"); } else {
		 * System.out.println("修改失败"); }
		 * 
		 * // 修改采购状态 Purchase purchase = new Purchase(); //修改过
		 * purchase.setPurchaseId(purchaseId); purchase.setStatus("已处理");
		 * purchase.setLogisticsId(logistics.getLogisticsId());
		 * purchaseService.updateByPrimaryKeySelective(purchase);
		 */
		return "redirect:/purchasePending";
	}

	// ajax
	@RequestMapping("/supplierAjaxForpurchase.action")
	public void supplierAjaxForpurchase(Integer supplierId, HttpServletResponse response) {
		System.out.println("ajaxpp");
		try {
			PrintWriter out = response.getWriter();
			List<Goods> goodsList = goodsService.selectGoodsBySupplierId(supplierId);
			String json = JSON.toJSONString(goodsList);
			// System.out.println(json);
			out.print(json);
			out.flush();
			out.close();

		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	// ajax
	@RequestMapping("/findPrice.action")
	@ResponseBody
	public BigDecimal findPrice(Integer goodsId) {
		
		Goods goods = goodsService.selectByPrimaryKey(goodsId);
		BigDecimal beforeprice = goods.getBeforeprice();
		return beforeprice;
		 
		
	}

}
// for (Purchase purchase : purchaseList) {
// Date date = purchase.getPurchaseDate();
// System.out.println(date);
// SimpleDateFormat formatt= new SimpleDateFormat("yyyy-MM-dd") ;
//
// System.out.println(formatt.format(date));
// String a = formatt.format(date);
// }