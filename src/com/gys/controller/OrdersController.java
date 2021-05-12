package com.gys.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.gys.entity.Logistics;
import com.gys.entity.LogisticsCompany;
import com.gys.entity.Orders;
import com.gys.entity.OrdersExample;
import com.gys.entity.OrdersExample.Criteria;
import com.gys.entity.Provinces;
import com.gys.entity.Purchase;
import com.gys.entity.PurchaseExample;
import com.gys.entity.Trade;
import com.gys.entity.Warehouse;
import com.gys.entity.WarehouseGoods;

import com.gys.service.LogisticsCompanyService;
import com.gys.service.LogisticsService;
import com.gys.service.OrdersService;
import com.gys.service.ProvincesService;
import com.gys.service.TradeService;
import com.gys.service.WarehouseGoodsService;
import com.gys.service.WarehouseService;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

@Controller
public class OrdersController {
	@Autowired
	private OrdersService ordersService;

	@Autowired
	private TradeService tradeService;

	@Autowired
	private WarehouseService warehouseService;

	@Autowired
	private WarehouseGoodsService warehouseGoodsService;

	@Autowired
	private LogisticsCompanyService logisticsCompanyService;

	@Autowired
	private LogisticsService logisticsService;

	@Autowired
	private ProvincesService provincesService;

	// 页面跳转：到订单页 且把该订单信息放到该页
	@RequestMapping("/ordersList")
 	@RequiresPermissions("role:ordersList")
	public String ordersList(Integer pageNo,Model model) {
		
		OrdersExample example = new OrdersExample();
	    
	    example.setOrderByClause("id desc");
	    
	   /*
	    * 排序
	    *  example.setOrderByClause("Status desc");*/
	    
	    if (pageNo == null||pageNo==0) {
			pageNo = 1;
		} 
		
	     PageHelper.startPage(pageNo, 8); 
		List<Orders> selectByExample = ordersService.selectByExample(example);
		//分页2
 		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
 		model.addAttribute("ordersList", selectByExample);
		 
		

		return "/admin/orders/ordersList";
	}

	// 页面跳转：到调拨页
	@RequestMapping("/thisWarehouseOt")
	@RequiresPermissions("role:thisWarehouseOt")
	public String thisWarehouseOt(Integer goodsId,Integer warehouseId,Model model) {

		
		//查找有goodsId的仓库
		
		
		List<Warehouse> warehouseList = warehouseService.selectWarehouseByGoodsId(goodsId);
		model.addAttribute("warehouseList", warehouseList);
		// 传入省的数据
		List<Provinces> provincesList = provincesService.selectProvinces();
		model.addAttribute("provincesList", provincesList);
		// 传入快递公司的数据
		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
		model.addAttribute("logisticsCompanyList", logisticsCompanyList);

		//传要调去的仓库
		model.addAttribute("toWarehouseId", warehouseId);
		//传要调的商品id
		model.addAttribute("goodsId", goodsId);
		return "/admin/orders/thisWarehouseOt";
	}

	// 页面跳转：选择快递
	@RequestMapping("/ordersLog")
	public String ordersLog(Integer orderId, Integer addressId, Model model) {

		// 传入快递公司的数据
		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
		model.addAttribute("logisticsCompanyList", logisticsCompanyList);
		model.addAttribute("orderId", orderId);
		model.addAttribute("addressId", addressId);
		return "/admin/orders/ordersLog";
	}
	
	// 页面跳转：确认信息
	@RequestMapping("/confirmOrder")
	public String confirmOrder(Integer id,Model model) {

		Orders order = ordersService.selectByPrimaryKey(id);
		//确认
		 int result = ordersService.passOrderAndLog(order);
		
		
		return "redirect:/ordersPending";
	}

	// 页面跳转：到采购页
	@RequestMapping("/trade")
//	@RequiresPermissions("role:trade")
	public String trade(Integer id , Model model) {
		
		Orders order = ordersService.selectByPrimaryKey(id);
		System.out.println("OrderController测试order"+order);
		List<Trade> tradeList = order.getTradeList();
		List<Trade> tradeList2 =new ArrayList<>();
		List<WarehouseGoods> warehouseGoodsList = order.getWarehouse().getWarehouseGoodsList();
		
		for (Trade trade : tradeList) {
			Integer goodsId = trade.getGoods().getGoodsId();
		 
			for (WarehouseGoods warehouseGoods : warehouseGoodsList) {
				 
				 
				if(goodsId==warehouseGoods.getGoodsId()) {
					 Integer warehouseGoodsQuantity = warehouseGoods.getWarehouseGoodsQuantity();
					 trade.setLastQuantity(warehouseGoodsQuantity);
					 System.out.println("gai");
					 break;
				}
				
			}
			if(trade.getLastQuantity()==null) {
				 trade.setLastQuantity(0);
				 System.out.println("gai2");
			}
			tradeList2.add(trade);
		}
		order.setTradeList(tradeList2);
		model.addAttribute("id",id);
		model.addAttribute("order",order);
		return "/admin/orders/trade";
	}
	
	
	
//	// 页面跳转：到采购页
//	@RequestMapping("/trade")
////	@RequiresPermissions("role:trade")
//	public String trade(Integer orderId, Integer warehouseId, Model model) {
//		model.addAttribute("orderId", orderId);
//		
//		// 传入快递公司的数据
//		List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
//		model.addAttribute("logisticsCompanyList", logisticsCompanyList);
//		
//		// 传该订单信息过去
//		Orders order = ordersService.selectByPrimaryKey(orderId);
//		model.addAttribute("order", order);
//		
//		// 通过订单上的收货地址找到所在省的仓库
//		List<Warehouse> warehouseList = warehouseService.selectByOrderId(orderId);
//		model.addAttribute("warehouseList", warehouseList);
//		
//		/*
//		 * 获得当前仓库商品余量：
//		 */
//		
//		List<Trade> tradeList = tradeService.selectTradeByOrderId(orderId);
//		
//		if (warehouseId==null) {// 第一次点到此页面把warehouseId设置为warehouseList的第一个
//			warehouseId = warehouseList.get(0).getWarehouseId();
//		}
//		
//		model.addAttribute("warehouseId", warehouseId);
//		
//		// 当前仓库商品余量：
//		for (Trade trade : tradeList) {
//			Integer goodsId = trade.getGoodsId();
//			Integer quantity = warehouseGoodsService.selectQuantityByWarehouseIdGoodsId(goodsId, warehouseId);
//			if (quantity == null || quantity == 0) {
////	此处修改过			trade.setWarehouseGoodsQuantity(0);
//			} else {
////	此处修改过			trade.setWarehouseGoodsQuantity(quantity);
//			}
//		}
//		model.addAttribute("tradeList", tradeList);
//		return "/admin/orders/trade";
//	}
//	
	// 页面跳转：到采购页
		@RequestMapping("/tradeOver")
//		@RequiresPermissions("role:trade")
		public String tradeOver(Integer orderId, Integer warehouseId, Model model) {
			model.addAttribute("orderId", orderId);
			
			// 传入快递公司的数据
			List<LogisticsCompany> logisticsCompanyList = logisticsCompanyService.selectLogisticsCompany();
			model.addAttribute("logisticsCompanyList", logisticsCompanyList);
			
			// 传该订单信息过去
			Orders order = ordersService.selectByPrimaryKey(orderId);
			model.addAttribute("order", order);

			// 通过订单上的收货地址找到所在省的仓库
			List<Warehouse> warehouseList = warehouseService.selectByOrderId(orderId);
			model.addAttribute("warehouseList", warehouseList);

			/*
			 * 获得当前仓库商品余量：
			 */

			List<Trade> tradeList = tradeService.selectTradeByOrderId(orderId);

			if (warehouseId==null) {// 第一次点到此页面把warehouseId设置为warehouseList的第一个
				warehouseId = warehouseList.get(0).getWarehouseId();
			}

			model.addAttribute("warehouseId", warehouseId);

			// 当前仓库商品余量：
			for (Trade trade : tradeList) {
				Integer goodsId = trade.getGoodsId();
				Integer quantity = warehouseGoodsService.selectQuantityByWarehouseIdGoodsId(goodsId, warehouseId);
				if (quantity == null || quantity == 0) {
//		此处修改过			trade.setWarehouseGoodsQuantity(0);
				} else {
//此处修改过				trade.setWarehouseGoodsQuantity(quantity);
				}
			}
			model.addAttribute("tradeList", tradeList);
			return "/admin/orders/tradeOver";
		}

	// 页面跳转：到待处理页
	@RequestMapping("/ordersPending")
	@RequiresPermissions("role:ordersPending")
	public String ordersPending(Integer pageNo,Model model) {

		OrdersExample example = new OrdersExample();
	    Criteria c1 = example.createCriteria();
	    c1.andZtEqualTo("订单生成");
	    example.setOrderByClause("id desc");
	    
	   /*
	    * 排序
	    *  example.setOrderByClause("Status desc");*/
	    
	    if (pageNo == null||pageNo==0) {
			pageNo = 1;
		} 
		
	     PageHelper.startPage(pageNo, 8); 
		List<Orders> selectByExample = ordersService.selectByExample(example);
		//分页2
 		MyPageUtil.myPageUtil(pageNo, model, selectByExample);
 		model.addAttribute("ordersPendingList", selectByExample);
      /*  if(pageNo==null) {
			pageNo=1;
		}
		
		Integer pageSize=8;
		List<Orders> ordersPendingList = ordersService.selectOrdersBylogisticsIdis0(pageNo,pageSize);

		int ordersAllCount = ordersService.getAllCountPend();
		
		//分页
		PageGoUtil.pageGo(pageNo, model, pageSize, ordersAllCount);
		model.addAttribute("ordersPendingList", ordersPendingList);*/
		 
		
		return "/admin/orders/ordersPending";
	}

	@RequestMapping("/ordersLog.action")
	public String ordersLog(LogisticsCompany logisticsCompany, Integer orderId, Integer addressId,Integer fromWarehouseId ,Model model) {
//		修改商品数量
		List<Trade> tradeList = tradeService.selectTradeByOrderId(orderId);
        for (Trade trade : tradeList) {
			Integer goodsId = trade.getGoodsId();
			
			Integer tradeQuantity = trade.getTradeQuantity();
			warehouseGoodsService.updateFromWarehouseGoods(fromWarehouseId, goodsId, tradeQuantity);
		}
		
		
		// 选择快递：新建物流信息
		String logisticsName = logisticsCompany.getLogisticsName();
		Logistics logistics = new Logistics();
//此处修改过	   logistics.setOrderId(orderId);
		logistics.setFromWarehouseId(fromWarehouseId);
		logistics.setLogisticsName(logisticsName);
		logisticsService.insertSelective(logistics);

		// 修改orders logisticsId

		Logistics logistics2 = logisticsService.selectLogisticsByOrderId(orderId);
		Orders orders = new Orders();
//此处修改过		orders.setOrderId(orderId);
		orders.setLogisticsId(logistics2.getLogisticsId());
		ordersService.updateByPrimaryKeySelective(orders);
		 
		return "redirect:/ordersPending";
	}
	// ajax
	@RequestMapping("/ordersAjaxForGoods.action")
	public void ordersAjaxForGoods(Integer goodsId,Integer warehouseId,HttpServletResponse response) {
		
		try {
			PrintWriter out =  response.getWriter();
			 WarehouseGoods warehouseGoods =  warehouseGoodsService.selectWarehouseGoodsByGoodsIdWarehouseId(goodsId, warehouseId);
			String json  = JSON.toJSONString(warehouseGoods); 
//			System.out.println(json);
			out.print(json);
			out.flush();
			out.close();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
	}
}
