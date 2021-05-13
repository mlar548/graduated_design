package com.gys.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageHelper;
import com.gys.entity.Goods;
import com.gys.entity.GoodsExample;
import com.gys.entity.GoodsExample.Criteria;
import com.gys.entity.GoodsType;
import com.gys.entity.Supplier;
import com.gys.entity.SupplierExample;
import com.gys.service.GoodsService;
import com.gys.service.GoodsTypeService;
import com.gys.service.SupplierService;
import com.gys.util.MyPageUtil;
import com.gys.util.PageGoUtil;

@Controller
public class GoodsController {
	@Autowired
	private GoodsService goodsService;
	@Autowired
	private SupplierService supplierService;
	@Autowired
	private GoodsTypeService goodsTypeService;

	// 页面跳转：到管理供应商页 且把该供应商信息放到该页
	
	@RequestMapping("/goodsList")
	@RequiresPermissions("role:goodsList")
	public String goodsList(@RequestParam(required=false,defaultValue="abcffg",name="findGoodsName")String findGoodsName,
			Integer pageNo,Model model) {

		GoodsExample goodsExample = new  GoodsExample();
		  Criteria criteria = goodsExample.createCriteria();
		
		
		if(!findGoodsName.equals("abcffg")) {
			criteria.andGoodsNameLike("%"+findGoodsName+"%");
		}
		  if (pageNo == null||pageNo==0) {
				pageNo = 1;
			} 
			
		     PageHelper.startPage(pageNo, 8); 
			List<Goods> selectByExample = goodsService.selectByExample(goodsExample);
			//分页2
			MyPageUtil.myPageUtil(pageNo, model, selectByExample);
		
		
		/*if(pageNo==null) {
			pageNo=1;
		}
		Integer pageSize=8;
		
		List<Goods> goodsList = goodsService.selectGoodsPage(pageNo,pageSize);
		int goodsAllCount = goodsService.getAllCount();
		//分页
		PageGoUtil.pageGo(pageNo, model, pageSize, goodsAllCount);*/
		model.addAttribute("goodsList", selectByExample);
		return "/admin/goods/goodsList";
	}

	// 页面跳转：到商品增加页
	@RequestMapping("/GoodsAdd")
	@RequiresPermissions("role:GoodsAdd")
	public String GoodsAdd(Model model) {

		List<Supplier> supplierList = supplierService.selectSupplier();
		List<GoodsType> goodsTypeList = goodsTypeService.selectGoodsType();

		model.addAttribute("supplierList", supplierList);
		model.addAttribute("goodsTypeList", goodsTypeList);
		return "/admin/goods/goodsAdd";
	}

	// 页面跳转：到商品修改页
	@RequestMapping("/goodsUpdate")
	@RequiresPermissions("role:goodsUpdate")
	public String goodsUpdate(Integer goodsId, Model model) {
		Goods good = goodsService.selectByPrimaryKey(goodsId);
		List<Supplier> supplierList = supplierService.selectSupplier();
		List<GoodsType> goodsTypeList = goodsTypeService.selectGoodsType();

		model.addAttribute("supplierList", supplierList);
		model.addAttribute("goodsTypeList", goodsTypeList);
		model.addAttribute("good", good);
		return "/admin/goods/goodsUpdate";
	}

	//
	// 添加商品
	@RequestMapping("/goodsAdd.action") 
	public String goodsAdd(Goods good, Model model, @RequestParam(required=false,name="goodsPhotoFile") MultipartFile goodsPhotoFile,
			HttpServletRequest request) {

		// 图片处理
		// 文件名goodsPhotoFile
		if(goodsPhotoFile!=null) {
		fileUploadSet(good, goodsPhotoFile, request);
		}
		good.setRemain(0);
		goodsService.insert(good);
		

		return "redirect:/goodsList";
	}

	// 删除供应商
	@RequestMapping("/goodsDelete.action")
	@RequiresPermissions("role:goodsDelete")
	public String goodsDelete(Integer goodsId, Model model) {

		goodsService.deleteByPrimaryKey(goodsId);
		 
		return "redirect:/goodsList";
	}

	// 修改商品
	@RequestMapping("/goodsUpdate.action")
	public String goodsUpdate(Goods good, Model model, @RequestParam(required=false,name="goodsPhotoFile") MultipartFile goodsPhotoFile,
			HttpServletRequest request) {
		if(goodsPhotoFile!=null) {
			// 文件名goodsPhotoFile
			fileUploadSet(good, goodsPhotoFile, request);
		}
		

		goodsService.updateByPrimaryKeySelective(good);

		 
		return "redirect:/goodsList";
	}

	/**
	 * 修改、上传图片的方法
	 * 
	 * @param good
	 * @param goodsPhotoFile
	 * @param requset
	 */
	private void fileUploadSet(Goods good, MultipartFile goodsPhotoFile, HttpServletRequest request) {
		if (!goodsPhotoFile.isEmpty() && goodsPhotoFile.getSize() > 0) {
			// 获得上存文件的原始名称
			String originalFilename = goodsPhotoFile.getOriginalFilename();
			// 设置上传文件的保存地址目录

			String dirPath = "D:/Graduated_DesignFile/img/";

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
			String goodsPhoto = originalFilename;
			good.setGoodsPhoto(goodsPhoto);
		}
	}
}
