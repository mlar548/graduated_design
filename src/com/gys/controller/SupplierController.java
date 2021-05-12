package com.gys.controller;

import java.util.List;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageHelper;
import com.gys.entity.Purchase;
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;
import com.gys.entity.SupplierExample.Criteria;
import com.gys.service.SupplierService;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

 

@Controller
public class SupplierController {
	@Autowired
	private SupplierService supplierService;

	// 页面跳转：到管理供应商页 且把该供应商信息放到该页
	@RequestMapping("/supplier")
	@RequiresPermissions("role:supplier")
	public String supplier(@RequestParam(required=false,defaultValue="abcffg",name="findSupplierName")String findSupplierName,
			Integer pageNo,Model model) {
		
		SupplierExample supplierExample = new  SupplierExample();
		Criteria criteria = supplierExample.createCriteria();
		
		
		if(!findSupplierName.equals("abcffg")) {
			criteria.andSupplierNameLike("%"+findSupplierName+"%");
		}
		  if (pageNo == null||pageNo==0) {
				pageNo = 1;
			} 
			
		     PageHelper.startPage(pageNo, 8); 
			List<Supplier> selectByExample = supplierService.selectByExample(supplierExample);
			//分页2
			MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		
		/*int pageSize=8;
		if (pageNo == null) {
			pageNo = 1;
		}
		List<Supplier> supplierlist = supplierService.selectSupplierPage(pageNo, pageSize);
		 
		 
		int supplierAllCount = supplierService.getAllCount();
		//分页
		PageGoUtil.pageGo(pageNo, model, pageSize, supplierAllCount);*/
		
		model.addAttribute("supplierlist", selectByExample);
		return "/admin/supplier/supplierList";
	}

	

	// 页面跳转：到供应商增加页
	@RequestMapping("/supplierAdd")
	@RequiresPermissions("role:supplierAdd")
	public String supplierAdd() {

		return "/admin/supplier/supplierAdd";
	}

	 
	// 页面跳转：到供应链修改页
	@RequestMapping("/supplierUpdate")
	@RequiresPermissions("role:supplierUpdate")
	public String supplierUpdate(Integer supplierId, Model model) {
		Supplier supplier = supplierService.selectByPrimaryKey(supplierId);
		model.addAttribute("supplier", supplier);
		return "/admin/supplier/supplierUpdate";
	}

	// 添加供应商处理
	@RequestMapping("/supplierAdd.action")
	public String supplierAdd(Supplier supplier, Model model) {
	 
		supplierService.insert(supplier);
		List<Supplier> supplierlist = supplierService.selectSupplier();
		model.addAttribute("supplierlist", supplierlist);
		return "redirect:/supplier";
	}

	// 删除供应商
	@RequestMapping("/supplierDelete.action")
	@RequiresPermissions("role:supplierDelete.action")
	public String supplierDelete(Integer supplierId, Model model) {

		
		
		supplierService.deleteByPrimaryKey(supplierId);
		
		List<Supplier> supplierlist = supplierService.selectSupplier();
		model.addAttribute("supplierlist", supplierlist);
		return "redirect:/supplier";
	}

	// 修改收货地址
	@RequestMapping("/supplierUpdate.action")
	public String supplierUpdate(Supplier supplier, Model model) {

		supplierService.updateByPrimaryKeySelective(supplier);
		List<Supplier> supplierlist = supplierService.selectSupplier();
		model.addAttribute("supplierlist", supplierlist);
		return "redirect:/supplier";
	}

}
