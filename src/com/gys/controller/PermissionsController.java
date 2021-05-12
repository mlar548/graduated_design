package com.gys.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.gys.entity.Permissions;
import com.gys.entity.RolesPermissions;
import com.gys.entity.Users;
import com.gys.entity.WarehouseGoods;
import com.gys.service.PermissionsService;
import com.gys.service.RolesPermissionsService;
import com.gys.service.UsersService;

 

@Controller
public class PermissionsController {
	@Autowired
	private PermissionsService permissionsService;
	@Autowired
	private RolesPermissionsService rolesPermissionsService;
	@Autowired
	private UsersService usersService;

	// 页面跳转：到管理供应商页 且把该供应商信息放到该页
	@RequestMapping("/permissionsList")
 	@RequiresPermissions("role:permissionsMeue")
	public String supplier(Integer roleId, Model model) {
 	 
 	if(roleId==null) {
 		 roleId=4;
 	}
 	//默认首页显示客户管理员权限数据
		List<Permissions> permissionsList=permissionsService.selectPermissionsByRoleId(roleId);
		model.addAttribute("permissionsList", permissionsList);
		return "/admin/permissions/permissionsList"; 
	}
	// 页面跳转：到管理供应商页 且把该供应商信息放到该页
	@RequestMapping("/adminAdd")
	@RequiresPermissions("role:permissionsMeue")
	public String adminAdd() {
		 
		return "/admin/permissions/adminAdd"; 
	}
	// 页面跳转：到 授权页
	@RequestMapping("/permissionsAdd")
	@RequiresPermissions("role:permissionsMeue")
	public String permissionsAdd(String roleId,Model model) {
		 
		if(roleId==null) {//默认首页显示客户管理员未权限数据
	 		 roleId="4";
	 	}
		List<Permissions> permissionsList=permissionsService.selectNoPermissionsByRoleId(roleId);
		for (Permissions permissions : permissionsList) {
			permissions.setRoleId(roleId);
		}
		model.addAttribute("permissionsList", permissionsList);
		 
		return "/admin/permissions/permissionsAdd";
		
	}
	// 添加管理員
	@RequestMapping("/adminAdd.action")
	@RequiresPermissions("role:permissionsMeue")
	public String adminAdd(Users user,String roleId, Model model) {
	    System.out.println("User+"+user);
	    user.setPassword("123456");
	    int result = usersService.addUser(user,roleId);
		return "redirect:/adminAdd";
	}
	//   授权 
	@RequestMapping("/toPermissionsAdd")
	@RequiresPermissions("role:permissionsMeue")
	public String toPermissionsAdd(String roleId,String permissionId, Model model) {
	
		 int row = rolesPermissionsService.insertPermissionsByRoleIdPermissionId(roleId,permissionId);
		 if(row==1) {
			 System.out.println("insert success");
		 }else {
			 System.out.println("error");
		 }
		 
		 //传数据到授权页
		 List<Permissions> permissionsList=permissionsService.selectNoPermissionsByRoleId(roleId);
			for (Permissions permissions : permissionsList) {
				permissions.setRoleId(roleId);
			}
			model.addAttribute("permissionsList", permissionsList);
			model.addAttribute("roleId",roleId);
		return "/admin/permissions/permissionsAdd";
	}
	//移除权限
	@RequestMapping("/permissionsDelete")
	@RequiresPermissions("role:permissionsMeue")
	public String permissionsDelete(String roleId,String permissionId, Model model) {
	 
		 
		 int row=rolesPermissionsService.deletePermissionsByRoleIdPermissionId(roleId,permissionId);
		 if(row==1) {
			 System.out.println("delete success");
		 }else {
			 System.out.println("error");
		 }
		 List<Permissions> permissionsList=permissionsService.selectPermissionsByRoleId(Integer.parseInt(roleId));
		model.addAttribute("permissionsList", permissionsList);
		 model.addAttribute("roleId", roleId);
		return "/admin/permissions/permissionsList";
		
	}
	
	
	// ajax
		@RequestMapping("/permissionsAjaxForroleChoose")
		public void warehouseAjaxForGoods(Integer roleId , HttpServletResponse response) {

			try {
				PrintWriter out = response.getWriter();
				List<Permissions> permissionsList=permissionsService.selectPermissionsByRoleId(roleId);
				/*for (Permissions permissions : permissionsList) {
					permissions.setRoleId(roleId.toString());
				}*/
				String json = JSON.toJSONString(permissionsList);
				// System.out.println(json);
				out.print(json);
				out.flush();
				out.close();

			} catch (IOException e) {
				e.printStackTrace();
			}

		}
		// ajax
		@RequestMapping("/permissionsRemoveAjaxForroleChoose")
		public void permissionsRemoveAjaxForroleChoose(String roleId , HttpServletResponse response) {
			
			try {
				PrintWriter out = response.getWriter();
				List<Permissions> permissionsList=permissionsService.selectNoPermissionsByRoleId(roleId);
				for (Permissions permissions : permissionsList) {
					permissions.setRoleId(roleId);
				}
				String json = JSON.toJSONString(permissionsList);
				// System.out.println(json);
				out.print(json);
				out.flush();
				out.close();
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}

}
