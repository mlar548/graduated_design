package com.gys.sxt.realm;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.gys.entity.Permissions;
import com.gys.entity.Users;
import com.gys.service.PermissionsService;
import com.gys.service.UsersService;

/**
 * 自定义Realm方，法继承AuthorizingRealm
 * 
 * @author wzg
 *
 */
public class UserRealm extends AuthorizingRealm {

	@Autowired
	PermissionsService permissionsService;
	@Autowired
	UsersService usersService;

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return "userRealm";
	}

	// 认证
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		System.out.println("========认证========");
		String username = token.getPrincipal().toString();
		Users user = usersService.selectUserByUserName(username);
 	if (user == null) {
			// 用户名不存在抛出异常
			System.out.println("认证：当前登录的用户不存在");
			throw new UnknownAccountException();
		} 

//		System.out.println(username);

	 
		return new SimpleAuthenticationInfo(user, user.getPassword(), ByteSource.Util.bytes(user.getPasswordSalt()),
				getName());
	}

	// 授权
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principal) {
		System.out.println("========授权========");

		Users user = (Users) principal.getPrimaryPrincipal();

		if (user == null) {
			return null;
		}
		List<Permissions> permissionsList = permissionsService.findPermissionsByUserId(user.getUserId());
		if (permissionsList == null || permissionsList.size() == 0) {
			return null;
		}
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		for (Permissions permissions : permissionsList) {
			info.addStringPermission(permissions.getPerms());
		}

		return info;
	}

	/**
	 * 清理缓存的方法
	 */
	public void clearCache() {
		Subject subject = SecurityUtils.getSubject();
		super.clearCache(subject.getPrincipals());
	}

}
