package com.gys.controller;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.gys.entity.Logistics;
import com.gys.entity.LogisticsCompany;
import com.gys.entity.LogisticsExample;
import com.gys.entity.LogisticsExample.Criteria;
import com.gys.entity.LogisticsInformation;
import com.gys.entity.Purchase;
import com.gys.entity.WarehouseOt;
import com.gys.service.LogisticsCompanyService;
import com.gys.service.LogisticsInformationService;
import com.gys.service.LogisticsService;
import com.gys.service.PurchaseService;
import com.gys.service.WarehouseGoodsService;
import com.gys.service.WarehouseOtService;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

@Controller
public class LogisticsController {
	@Autowired
	private WarehouseGoodsService warehouseGoodsService;

	@Autowired
	private PurchaseService purchaseService;

	@Autowired
	private LogisticsService logisticsService;

	@Autowired
	private LogisticsCompanyService logisticsCompanyService;

	@Autowired
	private LogisticsInformationService logisticsInformationService;

	@Autowired
	private WarehouseOtService warehouseOtService;

	// 页面跳转：到物流模拟页
	@RequestMapping("/logisticsInformationAna")
	public String logisticsInformationAna(Model model) {
//		Integer ltId = 0;
//		model.addAttribute("ltId", ltId);
		return "/admin/logistics/logisticsInformationAna";
	}

	// 页面跳转：到物流公司管理页
	@RequestMapping("/logisticsCompanyList")
	@RequiresPermissions("role:logisticsCompanyList")
	public String logisticsCompanyList(Integer pageNo, Model model) {

		/* 分页开始 */

		if (pageNo == null) {
			pageNo = 1;
		}

		Integer pageSize = 8;
		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompanyPage(pageNo,
				pageSize);
		int logisticsCompanyAllCount = logisticsCompanyService.getLogisticsCompanyAllCount();
		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, logisticsCompanyAllCount);
		model.addAttribute("logisticsCompanyList", logisticsCompanyList);

		/* 分页结束 */

		return "/admin/logistics/logisticsCompanyList";
	}

	// 页面跳转：到客户物流管理页
	@RequestMapping("/logisticsOrdersList")
	public String logisticsOrdersList(Integer pageNo, Model model) {

		/* 分页开始 */

		if (pageNo == null) {
			pageNo = 1;
		}

		Integer pageSize = 8;
		List<Logistics> logisticsList = logisticsService.selectLogisticsForOrdersPage(pageNo, pageSize);
		int logisticsAllCount = logisticsService.getLogOrdersAllCount();
		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, logisticsAllCount);
		model.addAttribute("logisticsList", logisticsList);
		/* 分页结束 */

		return "/admin/logistics/logisticsOrdersList";
	}

	// 页面跳转：到调拨物流管理页
	@RequestMapping("/logisticsOtList")
	public String logisticsOtList(Integer pageNo, Model model) {

		/* 分页开始 */

		if (pageNo == null) {
			pageNo = 1;
		}

		Integer pageSize = 8;
		List<Logistics> logisticsList = logisticsService.selectLogisticsForOtPage(pageNo, pageSize);
		int logisticsAllCount = logisticsService.getLogOtAllCount();
		// 分页
		PageGoUtil.pageGo(pageNo, model, pageSize, logisticsAllCount);
		model.addAttribute("logisticsList", logisticsList);
		/* 分页结束 */

		return "/admin/logistics/logisticsOtList";
	}

	// 页面跳转：到物流公司管理页
	@RequestMapping("/logisticsList")
	@RequiresPermissions("role:logisticsList")
	public String logisticsList(Integer pageNo,Integer chooseType,Integer chooseZt, Model model) {
		
		LogisticsExample example = new LogisticsExample();
		example.setOrderByClause("logistics_id desc");
		 Criteria criteria = example.createCriteria();
		 
		 if (chooseType == null||chooseType==0) {
			 chooseType = 0;
			}
		 if (chooseZt == null||chooseZt==0) {
			 chooseZt = 0;
		 }
		 
		 if(chooseType==1) {
			  criteria.andTypeEqualTo(1);
		 }else if(chooseType==2) {
			 criteria.andTypeEqualTo(2);
		 }else if(chooseType==3) {
			 criteria.andTypeEqualTo(3);
		 }
		 if(chooseZt==1) {
			 criteria.andStatusEqualTo(1);
		 }else if(chooseZt==2) {
			 criteria.andStatusEqualTo(0);
		 } 
		 
		 model.addAttribute("chooseType",chooseType);
		 model.addAttribute("chooseZt",chooseZt);
		
		
	    if (pageNo == null||pageNo==0) {
			pageNo = 1;
		} 
		
	     PageHelper.startPage(pageNo, 8); 
	     List<Logistics> selectByExample = logisticsService.selectByExample(example);
			
		//分页2
		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		model.addAttribute("LogisticsList",selectByExample);
		
		// // 传正在进行的物流
		//
		// /* 分页开始 */
		//
		// if (pageNo == null) {
		// pageNo = 1;
		// }
		//
		// Integer pageSize = 8;
		// List<Logistics> logisticsList =
		// logisticsService.selectLogisticsForPurchasePage(pageNo, pageSize);
		// int logisticsAllCount = logisticsService.getLogPurchaseAllCount();
		// // 分页
		// PageGoUtil.pageGo(pageNo, model, pageSize, logisticsAllCount);
		// model.addAttribute("logisticsList", logisticsList);
		// /* 分页结束 */
		//
		return "/admin/logistics/logisticsList";
	}

	// 页面跳转：物流详细页
	@RequestMapping("/logisticsInformation")
	public String logisticsInformation(Integer logisticsId, Model model) {
		List<LogisticsInformation> logisticsInformationList = logisticsInformationService
				.selectlogisticsInformationBylogisticsId(logisticsId);
		model.addAttribute("logisticsInformationList", logisticsInformationList);
		return "/admin/logistics/logisticsInformation";
	}

	// 页面跳转：到物流公司修改页
	@RequestMapping("/logisticsCompanyUpdate")
	public String logisticsCompanyUpdate(Integer id, Model model) {

		LogisticsCompany logisticsCompany = logisticsCompanyService.selectByPrimaryKey(id);
		model.addAttribute("logisticsCompany", logisticsCompany);

		return "/admin/logistics/logisticsCompanyUpdate";
	}

	// 物流公司信息修改
	@RequestMapping("/logisticsCompanyUpdate.action")
	public String logisticsCompanyUpdate(LogisticsCompany logisticsCompany, Model model) {

		logisticsCompanyService.updateByPrimaryKeySelective(logisticsCompany);

		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
		model.addAttribute("logisticsCompanyList", logisticsCompanyList);
		return "/admin/logistics/logisticsCompanyList";
	}
	

	// 物流公司模拟处理
	@RequestMapping("/logisticsInformationAna.action")
	public String logisticsInformationAna(LogisticsInformation logisticsInformation, Model model) {
		
		
//		logisticsInformationService.insertSelective(logisticsInformation);
//		Integer ltId = logisticsInformation.getLtId();
//		model.addAttribute("ltId", ltId);
//		String information = logisticsInformation.getInformation();
//
//		// 快递到达数量处理
//		if (information.equals("已到达")) {
//			
//			
//			// 物流状态改为1
//			Logistics logistics = logisticsService.selectByPrimaryKey(ltId);
//			Logistics logistics2 = new Logistics();
//			logistics2.setLogisticsId(ltId);
//			logistics2.setStatus(1);
//			logisticsService.updateByPrimaryKeySelective(logistics2);
//			// --
//			// 判断是什么物流类型，做什么类型的处理
//			// 此处修改过 Integer purchaseId = logistics.getPurchaseId();
//			Integer fromWarehouseId = logistics.getFromWarehouseId();
//			Integer toWarehouseId = logistics.getToWarehouseId();
//			// 此处修改过 System.out.println("----->purchaseId:" + purchaseId);
//			System.out.println("----->fromWarehouseId:" + fromWarehouseId);
//			System.out.println("----->toWarehouseId:" + toWarehouseId);
			// 此处修改过 if (purchaseId != null) {
			// 此处修改过 System.out.println("purchaseId!=null");
			// 此处修改过 Purchase purchase = purchaseService.selectByPrimaryKey(purchaseId);
			/*
			 * 此处修改
			 */
			/*
			 * warehouseGoodsService.updateUpWarehouseGoods(purchase.getWarehouseId(),
			 * purchase.getGoodsId(), purchase.getPurchaseQuantity());
			 */
			// 此处修改过 }
			// 此处修改过 if (fromWarehouseId != null && toWarehouseId != null) {
			// 此处修改过 WarehouseOt warehouseOt = warehouseOtService
			// 此处修改过 .selectwarehouseOtByFromWarehouseIdToWarehouseId(fromWarehouseId,
			// toWarehouseId);

			// 此处修改过
			// warehouseGoodsService.updateUpWarehouseGoods(warehouseOt.getToWarehouseId(),
			// warehouseOt.getGoodsId(),
			// 此处修改过 warehouseOt.getWarehouseGoodsQuantity());
			// 此处修改过 System.out.println("fromWarehouseId!=null&&toWarehouseId!=null");
			// 此处修改过 }
			// --
//		}

		return "/admin/logistics/logisticsInformationAna";
	}
	
	@RequestMapping(value="/logisticsInformationAjax.action",produces = "text/json;charset=UTF-8")
	@ResponseBody
	public String logisticsInformationAjax(Integer ltId, Model model,HttpServletResponse response) {
		
	 
		List<LogisticsInformation> logisticsInformationList = logisticsInformationService
				.selectlogisticsInformationBylogisticsId(ltId);
		String json = JSON.toJSONString(logisticsInformationList);
		return json;
	}
	
	@RequestMapping(value="/logisticsInformationAjaxForAna.action",produces = "text/json;charset=UTF-8" )
	@ResponseBody
	public String logisticsInformationAjaxForAna(Integer ltId,String selectVal,String addrellVal, Model model,HttpServletResponse response) {
		
		 if(selectVal.equals("已到达")) {
			 Logistics logistics = logisticsService.selectByPrimaryKey(ltId);
			 logisticsInformationService.changeThings(logistics);
		 }
		LogisticsInformation logisticsInformation=new LogisticsInformation();
		logisticsInformation.setLtId(ltId);
		logisticsInformation.setAddress(addrellVal);
		logisticsInformation.setInformation(selectVal);
		logisticsInformationService.insertSelective(logisticsInformation);

		List<LogisticsInformation> logisticsInformationList = logisticsInformationService
				.selectlogisticsInformationBylogisticsId(ltId);
		String json = JSON.toJSONString(logisticsInformationList);
 
		return json;
	}
}
