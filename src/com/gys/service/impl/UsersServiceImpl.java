package com.gys.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gys.dao.AddressMapper;
import com.gys.dao.OrdersMapper;
import com.gys.dao.ProvincesMapper;
import com.gys.dao.TradeMapper;
import com.gys.dao.UserRolesMapper;
import com.gys.dao.UsersMapper;
import com.gys.entity.Address;
import com.gys.entity.GoodsGwc;
import com.gys.entity.GoodsGwcList;
import com.gys.entity.Orders;
import com.gys.entity.Provinces;
import com.gys.entity.ProvincesExample;
import com.gys.entity.ProvincesExample.Criteria;
import com.gys.entity.Trade;
import com.gys.entity.UserRoles;
import com.gys.entity.Users;
import com.gys.entity.UsersExample;
import com.gys.service.UsersService;
import com.gys.util.CreateId;

@Service
@Transactional
public class UsersServiceImpl implements UsersService {

	@Autowired
	private UsersMapper usersMapper; 
	
	@Autowired
	private OrdersMapper ordersMapper; 
	
	@Autowired
	private TradeMapper tradeMapper; 
	
	 @Autowired
	private UserRolesMapper userRolesMapper;
	 
	 @Autowired
	 private AddressMapper addressMapper; 
	 
	 @Autowired
	 private ProvincesMapper provincesMapper; 

	@Override
	public Users selectByPrimaryKey(Integer userId) {
		Users user = usersMapper.selectByPrimaryKey(userId);
		return user;
	} 
	
	@Override
	public Users login(String username, String password) {
		// TODO Auto-generated method stub
		return this.usersMapper.login(username,password);
	}


	@Override
	public void insertSelective(Users user) { 
		// TODO Auto-generated method stubS
		 this.usersMapper.insertSelective(user);
	}
 
	@Override
	public void updateByPrimaryKey(Users user) {
		// TODO Auto-generated method stub
		this.usersMapper.updateByPrimaryKey(user);
	}

	@Override
	public Users selectUserByUserName(String username) {
		// TODO Auto-generated method stub
		return this.usersMapper.selectUserByUserName(username);
	}

	@Override
	public List<Users> selectUsersByRoleId(Integer roleId) {
		return this.usersMapper.selectUsersByRoleId(roleId);
	}

	@Override
	public List<Users> selectUsersByRoleIdPage(Integer pageNo, Integer pageSize,Integer roleId) {
		pageNo = (pageNo-1)*pageSize;
		return this.usersMapper.selectUsersByRoleIdPage(  pageNo,   pageSize,  roleId);
	}

	@Override
	public int getUserByRoleIdis2AllCount(Integer roleId) {
		return this.usersMapper.getUserByRoleIdis2AllCount(roleId);
	}
//把cookie购物车的信息放到订单表中
	@Override
	public int createOrder(GoodsGwcList goodsGwcList,Integer addressId,Users user) {
		List<GoodsGwc> list = goodsGwcList.getGoodsGwcList();
		BigDecimal zongjiaPrice = goodsGwcList.getZongjiaPrice();
		
		
		
		Orders order=new Orders();
		order.setOrderPrice(zongjiaPrice);
		order.setZt("订单生成");
		order.setPayState("已付款");
		order.setUserId(user.getUserId());
		order.setAddressId(addressId);
		
		  Address address = addressMapper.selectByPrimaryKey(addressId);
		 
		  ProvincesExample provincesExample= new ProvincesExample();
		  Criteria criteria = provincesExample.createCriteria();
		  criteria.andProvinceEqualTo( address.getProvince());
		  List<Provinces> selectByExample = provincesMapper.selectByExample(provincesExample);
		  Integer warehouseId = selectByExample.get(0).getWarehouseId();
        // 设置仓库 		
		order.setWarehouseId(warehouseId);
		// 产生随机订单
		 CreateId oid = new CreateId();
		 String createId = oid.createId();
		 String orderId = "O" + createId;
		 System.out.println("订单号"+orderId);
		 order.setOrderId(orderId);
		int res2 = ordersMapper.insertSelective(order);
		
		System.out.println("结果"+res2);
		for (GoodsGwc goodsGwc : list) {
			Trade trade = new Trade();
//			取商品名
			Integer goodsId = goodsGwc.getGoods().getGoodsId();
//			取商品数量
			Integer num = goodsGwc.getNum();
//			取商品价格	
			BigDecimal price = goodsGwc.getGoods().getPrice();
//			取商品小计	
			BigDecimal allPrice = goodsGwc.getAllPrice();
			
			trade.setOrderId(orderId);
			trade.setGoodsId(goodsId);
			trade.setTradeQuantity(num);
			trade.setTradeOnePrice(price);
			trade.setTradeAllPrice(allPrice);
			
			int res = tradeMapper.insertSelective(trade);
			System.out.println("结果"+res);
		}
		
		
		return 1;
	}

	@Override
	public int addUser(Users user,String roleId) {
		//添加管理员
		//散列2次
		String password = user.getPassword();
		 UUID randomUUID = UUID.randomUUID();
		    String salt=randomUUID.toString().replaceAll("-", "").substring(4, 8);
		    
		    
		
		String password_salt_2 = new Md5Hash(password, salt, 2).toString();
		System.out.println("散列2次："+password_salt_2);
		user.setPassword(password_salt_2);
		user.setPasswordSalt(salt);
		 usersMapper.insertSelective(user);
		 
		//添加角色
		UserRoles userRoles = new UserRoles();
		userRoles.setRoleId(roleId);
		userRoles.setUserId(user.getUserId());
		int result = userRolesMapper.insert(userRoles);
		
		return result;
	}

	@Override
	public List<Users> selectByExample(UsersExample example) {
		return this.usersMapper.selectByExample(example);
	}

	@Override
	public int updateByPrimaryKeySelective(Users user) {
		return this.usersMapper.updateByPrimaryKeySelective(user);
	}

}
