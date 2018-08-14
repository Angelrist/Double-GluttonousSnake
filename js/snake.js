var map = document.getElementById('map');
// 使用构造方法创建两条蛇

// 创建蛇蛇1号
function Snake_1() {
	// 设置蛇的宽、高、默认走的方向
	this.width = 10;
	this.height = 10;
	this.direction = 'left';

	// 记住蛇的状态，当吃完食物的时候，就要加一个，初始为3个小点为一个蛇，
	this.body_1 = [
		{
			x: 74,
			y: 0
		}, // 蛇头，第一个点
		{
			x: 75,
			y: 0
		}, // 蛇身，第二个点
		{
			x: 76,
			y: 0
		}, // 蛇身，第三个点
		{
			x: 77,
			y: 0
		}, // 蛇身，第四个点
		{
			x: 78,
			y: 0
		}, // 蛇身，第五个点
		{
			x: 79,
			y: 0
		} // 蛇尾，第六个点
	];

	// 显示蛇
	this.display = function() {
		// 创建蛇
		for(var i = 0; i < this.body_1.length; i++) {
			if(this.body_1[i].x != null) { // 当吃到食物时，x==null，不能新建，不然会在0，0处新建一个
				var s = document.createElement('div');
				// 将节点保存到状态中，以便于后面删除
				this.body_1[i].flag = s;
				// 设置宽高
				s.style.width = this.width + 'px';
				s.style.height = this.height + 'px';
				s.style.borderRadius = "50%";
				this.body_1[0].flag.style.background = "black";
				s.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
				// 设置位置
				s.style.position = 'absolute';
				s.style.left = this.body_1[i].x * this.width + 'px';
				s.style.top = this.body_1[i].y * this.height + 'px';
				// 添加进去
				map.appendChild(s);
			}
		}
	};

	// 让蛇跑起来,后一个元素到前一个元素的位置
	// 蛇头根据方向处理，所以i不能等于0
	this.run = function() {
		// 后一个元素到前一个元素的位置
		for(var i = this.body_1.length - 1; i > 0; i--) {
			this.body_1[i].x = this.body_1[i - 1].x;
			this.body_1[i].y = this.body_1[i - 1].y;
		}

		// 根据方向处理蛇头
		switch(this.direction) {
			case "left":
				this.body_1[0].x -= 1;
				break;
			case "right":
				this.body_1[0].x += 1;
				break;
			case "up":
				this.body_1[0].y -= 1;
				break;
			case "down":
				this.body_1[0].y += 1;
				break;
		}

		// 判断是否出界,一蛇头判断,出界的话，
		if(this.body_1[0].x < 0 || this.body_1[0].x > 79 || this.body_1[0].y < 0 || this.body_1[0].y > 39) {
			clearInterval(timer_1); // 清除定时器，
			alert("你的蛇蛇1号撞死了！点击开始重新启动蛇蛇1号！");
			// 删除旧的
			for(var i = 0; i < this.body_1.length; i++) {
				if(this.body_1[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
					map.removeChild(this.body_1[i].flag);
				}
			}
			this.body_1 = [ // 回到初始状态，
				{
					x: 74,
					y: 0
				}, // 蛇头，第一个点
				{
					x: 75,
					y: 0
				}, // 蛇身，第二个点
				{
					x: 76,
					y: 0
				}, // 蛇身，第三个点
				{
					x: 77,
					y: 0
				}, // 蛇身，第四个点
				{
					x: 78,
					y: 0
				}, // 蛇身，第五个点
				{
					x: 79,
					y: 0
				} // 蛇尾，第六个点
			];
			this.direction = 'left';
			this.display(); // 显示初始状态
			return false; // 结束
		}

		//两蛇头相撞

		//判断如果两蛇头同时相撞，则同时出局
		if(snake_1.body_1[0].x == snake_2.body_2[0].x && snake_1.body_1[0].y == snake_2.body_2[0].y) {
			clearInterval(timer_1);
			clearInterval(timer_2);
			alert("你们俩相撞了！同时出局！");
			// 删除旧的蛇蛇1号
			for(var i = 0; i < snake_1.body_1.length; i++) {
				if(snake_1.body_1[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
					map.removeChild(snake_1.body_1[i].flag);
				}
			}
			// 删除旧的蛇蛇2号
			for(var i = 0; i < snake_2.body_2.length; i++) {
				if(snake_2.body_2[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
					map.removeChild(snake_2.body_2[i].flag);
				}
			}

			//蛇蛇1号归位
			snake_1.body_1 = [ // 回到初始状态，
				{
					x: 74,
					y: 0
				}, // 蛇头，第一个点
				{
					x: 75,
					y: 0
				}, // 蛇身，第二个点
				{
					x: 76,
					y: 0
				}, // 蛇身，第三个点
				{
					x: 77,
					y: 0
				}, // 蛇身，第四个点
				{
					x: 78,
					y: 0
				}, // 蛇身，第五个点
				{
					x: 79,
					y: 0
				} // 蛇尾，第六个点
			];
			snake_1.direction = 'left';
			snake_1.display(); // 显示初始状态

			//蛇蛇2号归位
			snake_2.body_2 = [ // 回到初始状态，
				{
					x: 5,
					y: 0
				}, // 蛇头，第一个点
				{
					x: 4,
					y: 0
				}, // 蛇身，第二个点
				{
					x: 3,
					y: 0
				}, // 蛇身，第三个点
				{
					x: 2,
					y: 0
				}, // 蛇身，第四个点
				{
					x: 1,
					y: 0
				}, // 蛇身，第五个点
				{
					x: 0,
					y: 0
				} // 蛇尾，第六个点
			];
			snake_2.direction = 'right';
			snake_2.display(); // 显示初始状态
			
			return false;
		}

		// 判断蛇蛇1号蛇头如果撞到蛇蛇2号，则蛇蛇1号死亡
		for(var i = 0; i < snake_2.body_2.length; i++) {
			if(this.body_1[0].x == snake_2.body_2[i].x && this.body_1[0].y == snake_2.body_2[i].y) {
				clearInterval(timer_1);
				alert("你撞上了蛇蛇2号！点击开始重新启动蛇蛇1号！");
				// 删除旧的
				for(var i = 0; i < this.body_1.length; i++) {
					if(this.body_1[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
						map.removeChild(this.body_1[i].flag);
					}
				}
				this.body_1 = [ // 回到初始状态，
					{
						x: 74,
						y: 0
					}, // 蛇头，第一个点
					{
						x: 75,
						y: 0
					}, // 蛇身，第二个点
					{
						x: 76,
						y: 0
					}, // 蛇身，第三个点
					{
						x: 77,
						y: 0
					}, // 蛇身，第四个点
					{
						x: 78,
						y: 0
					}, // 蛇身，第五个点
					{
						x: 79,
						y: 0
					} // 蛇尾，第六个点
				];
				this.direction = 'left';
				this.display(); // 显示初始状态
				return false; // 结束
			}
		}

		// 判断蛇头吃到食物1，xy坐标重合，
		if(this.body_1[0].x == food_1.x && this.body_1[0].y == food_1.y) {
			// 蛇加一节，因为根据最后节点定，下面display时，会自动赋值的
			this.body_1.push({
				x: null,
				y: null,
				flag: null
			});

			// 清除食物,重新生成食物
			map.removeChild(food_1.flag);
			food_1.display();
			return false; // 结束
		}
		// 判断蛇头吃到食物2，xy坐标重合，
		if(this.body_1[0].x == food_2.x && this.body_1[0].y == food_2.y) {
			// 蛇加一节，因为根据最后节点定，下面display时，会自动赋值的
			this.body_1.push({
				x: null,
				y: null,
				flag: null
			});

			// 清除食物,重新生成食物
			map.removeChild(food_2.flag);
			food_2.display();
			return false; // 结束
		}

		// 吃到自己死亡，从第五个开始与头判断，因为前四个永远撞不到
		for(var i = 4; i < this.body_1.length; i++) {
			if(this.body_1[0].x == this.body_1[i].x && this.body_1[0].y == this.body_1[i].y) {
				clearInterval(timer_1); // 清除定时器，
				alert("蛇蛇1号你怎么能吃自己呢！点击开始重新启动蛇蛇1号！");
				// 删除旧的
				for(var i = 0; i < this.body_1.length; i++) {
					if(this.body_1[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
						map.removeChild(this.body_1[i].flag);
					}
				}
				this.body_1 = [ // 回到初始状态，
					{
						x: 74,
						y: 0
					}, // 蛇头，第一个点
					{
						x: 75,
						y: 0
					}, // 蛇身，第二个点
					{
						x: 76,
						y: 0
					}, // 蛇身，第三个点
					{
						x: 77,
						y: 0
					}, // 蛇身，第四个点
					{
						x: 78,
						y: 0
					}, // 蛇身，第五个点
					{
						x: 79,
						y: 0
					} // 蛇尾，第六个点
				];
				this.direction = 'left';
				this.display(); // 显示初始状态
				return false; // 结束
			}
		}

		// 先删掉初始的蛇，在显示新蛇
		for(var i = 0; i < this.body_1.length; i++) {
			if(this.body_1[i].flag != null) { // 当吃到食物时，flag是等于null，且不能删除
				map.removeChild(this.body_1[i].flag);
			}
		}

		// 重新显示蛇
		this.display();

	}
}
// 创建蛇蛇2号
function Snake_2() {
	// 设置蛇的宽、高、默认走的方向
	this.width = 10;
	this.height = 10;
	this.direction = 'right';

	// 记住蛇的状态，当吃完食物的时候，就要加一个，初始为3个小点为一个蛇，
	this.body_2 = [{
			x: 5,
			y: 0
		}, // 蛇头，第一个点
		{
			x: 4,
			y: 0
		}, // 蛇身，第二个点
		{
			x: 3,
			y: 0
		}, // 蛇身，第三个点
		{
			x: 2,
			y: 0
		}, // 蛇身，第四个点
		{
			x: 1,
			y: 0
		}, // 蛇身，第五个点
		{
			x: 0,
			y: 0
		} // 蛇尾，第六个点
	];

	// 显示蛇
	this.display = function() {
		// 创建蛇
		for(var i = 0; i < this.body_2.length; i++) {
			if(this.body_2[i].x != null) { // 当吃到食物时，x==null，不能新建，不然会在0，0处新建一个
				var s = document.createElement('div');
				// 将节点保存到状态中，以便于后面删除
				this.body_2[i].flag = s;
				// 设置宽高
				s.style.width = this.width + 'px';
				s.style.height = this.height + 'px';
				s.style.borderRadius = "50%";
				//设置蛇头颜色为黑色
				this.body_2[0].flag.style.background = "black";
				//设置蛇身颜色为绿色
				s.style.background = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
				// 设置位置
				s.style.position = 'absolute';
				s.style.left = this.body_2[i].x * this.width + 'px';
				s.style.top = this.body_2[i].y * this.height + 'px';
				// 添加进去
				map.appendChild(s);
			}
		}
	};

	// 让蛇跑起来,后一个元素到前一个元素的位置
	// 蛇头根据方向处理，所以i不能等于0
	this.run = function() {
		// 后一个元素到前一个元素的位置
		for(var i = this.body_2.length - 1; i > 0; i--) {
			this.body_2[i].x = this.body_2[i - 1].x;
			this.body_2[i].y = this.body_2[i - 1].y;
		}

		// 根据方向处理蛇头
		switch(this.direction) {
			case "left":
				this.body_2[0].x -= 1;
				break;
			case "right":
				this.body_2[0].x += 1;
				break;
			case "up":
				this.body_2[0].y -= 1;
				break;
			case "down":
				this.body_2[0].y += 1;
				break;
		}

		// 判断是否出界,一蛇头判断,出界的话，
		if(this.body_2[0].x < 0 || this.body_2[0].x > 79 || this.body_2[0].y < 0 || this.body_2[0].y > 39) {
			clearInterval(timer_2); // 清除定时器，
			alert("你的蛇蛇2号撞死了！点击开始重新启动蛇蛇2号！");
			// 删除旧的
			for(var i = 0; i < this.body_2.length; i++) {
				if(this.body_2[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
					map.removeChild(this.body_2[i].flag);
				}
			}
			this.body_2 = [ // 回到初始状态，
				{
					x: 5,
					y: 0
				}, // 蛇头，第一个点
				{
					x: 4,
					y: 0
				}, // 蛇身，第二个点
				{
					x: 3,
					y: 0
				}, // 蛇身，第三个点
				{
					x: 2,
					y: 0
				}, // 蛇身，第四个点
				{
					x: 1,
					y: 0
				}, // 蛇身，第五个点
				{
					x: 0,
					y: 0
				} // 蛇尾，第六个点
			];
			this.direction = 'right';
			this.display(); // 显示初始状态
			return false; // 结束
		}

		// 判断蛇蛇2号蛇头如果撞到蛇蛇1号，则蛇蛇2号死亡
		for(var i = 0; i < snake_1.body_1.length; i++) {
			if(this.body_2[0].x == snake_1.body_1[i].x && this.body_2[0].y == snake_1.body_1[i].y) {
				clearInterval(timer_2); // 清除定时器，
				alert("你撞上了蛇蛇1号！点击开始重新启动蛇蛇2号！");
				// 删除旧的
				for(var i = 0; i < this.body_2.length; i++) {
					if(this.body_2[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
						map.removeChild(this.body_2[i].flag);
					}
				}
				this.body_2 = [ // 回到初始状态，
					{
						x: 5,
						y: 0
					}, // 蛇头，第一个点
					{
						x: 4,
						y: 0
					}, // 蛇身，第二个点
					{
						x: 3,
						y: 0
					}, // 蛇身，第三个点
					{
						x: 2,
						y: 0
					}, // 蛇身，第四个点
					{
						x: 1,
						y: 0
					}, // 蛇身，第五个点
					{
						x: 0,
						y: 0
					} // 蛇尾，第六个点
				];
				this.direction = 'right';
				this.display(); // 显示初始状态
				return false; // 结束
			}
		}

		// 判断蛇头吃到食物1，xy坐标重合，
		if(this.body_2[0].x == food_1.x && this.body_2[0].y == food_1.y) {
			// 蛇加一节，因为根据最后节点定，下面display时，会自动赋值的
			this.body_2.push({
				x: null,
				y: null,
				flag: null
			});

			// 清除食物,重新生成食物
			map.removeChild(food_1.flag);
			food_1.display();
		}
		// 判断蛇头吃到食物2，xy坐标重合，
		if(this.body_2[0].x == food_2.x && this.body_2[0].y == food_2.y) {
			// 蛇加一节，因为根据最后节点定，下面display时，会自动赋值的
			this.body_2.push({
				x: null,
				y: null,
				flag: null
			});

			// 清除食物,重新生成食物
			map.removeChild(food_2.flag);
			food_2.display();
		}

		// 吃到自己死亡，从第五个开始与头判断，因为前四个永远撞不到
		for(var i = 4; i < this.body_2.length; i++) {
			if(this.body_2[0].x == this.body_2[i].x && this.body_2[0].y == this.body_2[i].y) {
				clearInterval(timer_2); // 清除定时器，
				alert("蛇蛇2号你怎么能吃自己呢！点击开始重新启动蛇蛇2号！");
				// 删除旧的
				for(var i = 0; i < this.body_2.length; i++) {
					if(this.body_2[i].flag != null) { // 如果刚吃完就死掉，会加一个值为null的
						map.removeChild(this.body_2[i].flag);
					}
				}
				this.body_2 = [ // 回到初始状态，
					{
						x: 5,
						y: 0
					}, // 蛇头，第一个点
					{
						x: 4,
						y: 0
					}, // 蛇身，第二个点
					{
						x: 3,
						y: 0
					}, // 蛇身，第三个点
					{
						x: 2,
						y: 0
					}, // 蛇身，第四个点
					{
						x: 1,
						y: 0
					}, // 蛇身，第五个点
					{
						x: 0,
						y: 0
					} // 蛇尾，第六个点
				];
				this.direction = 'right';
				this.display(); // 显示初始状态
				return false; // 结束
			}
		}

		// 先删掉初始的蛇，在显示新蛇
		for(var i = 0; i < this.body_2.length; i++) {
			if(this.body_2[i].flag != null) { // 当吃到食物时，flag是等于null，且不能删除
				map.removeChild(this.body_2[i].flag);
			}
		}

		// 重新显示蛇
		this.display();

	}
}

// 构造食物
function Food_1() {
	this.width = 10;
	this.height = 10;

	this.display = function() {
		var f = document.createElement('div');
		this.flag = f;
		f.style.width = this.width + 'px';
		f.style.height = this.height + 'px';
		f.style.background = 'red';
		f.style.borderRadius = '50%';
		f.style.position = 'absolute';
		this.x = Math.floor(Math.random() * 80);
		this.y = Math.floor(Math.random() * 40);
		f.style.left = this.x * this.width + 'px';
		f.style.top = this.y * this.height + 'px';
		map.appendChild(f);
	}
}

function Food_2() {
	this.width = 10;
	this.height = 10;

	this.display = function() {
		var f = document.createElement('div');
		this.flag = f;
		f.style.width = this.width + 'px';
		f.style.height = this.height + 'px';
		f.style.background = 'blue';
		f.style.borderRadius = '50%';
		f.style.position = 'absolute';
		this.x = Math.floor(Math.random() * 80);
		this.y = Math.floor(Math.random() * 40);
		f.style.left = this.x * this.width + 'px';
		f.style.top = this.y * this.height + 'px';
		map.appendChild(f);
	}
}

var snake_1 = new Snake_1();
var snake_2 = new Snake_2();
var food_1 = new Food_1();
var food_2 = new Food_2();
snake_1.display(); // 初始化显示蛇蛇1号
snake_2.display(); // 初始化显示蛇蛇2号
food_1.display(); // 初始化显示食物
food_2.display(); // 初始化显示食物

// 给body加按键事件，上下左右
document.body.onkeydown = function(e) {
	// 有事件对象就用事件对象，没有就自己创建一个，兼容低版本浏览器
	var ev = e || window.event;

	switch(ev.keyCode) {
		//蛇蛇1号控制器
		case 38:
			if(snake_1.direction != 'down') { // 不允许返回，向上的时候不能向下
				snake_1.direction = "up";
			}
			break;
		case 40:
			if(snake_1.direction != "up") { // 不允许返回，向下的时候不能向上
				snake_1.direction = "down";
			}
			break;
		case 37:
			if(snake_1.direction != "right") { // 不允许返回，向左的时候不能向右
				snake_1.direction = "left";
			}
			break;
		case 39:
			if(snake_1.direction != "left") { // 不允许返回，向右的时候不能向左
				snake_1.direction = "right";
			}
			break;
			//蛇蛇2号控制器
		case 87:
			if(snake_2.direction != 'down') {
				snake_2.direction = "up";
			}
			break;
		case 83:
			if(snake_2.direction != "up") {
				snake_2.direction = "down";
			}
			break;
		case 65:
			if(snake_2.direction != "right") {
				snake_2.direction = "left";
			}
			break;
		case 68:
			if(snake_2.direction != "left") {
				snake_2.direction = "right";
			}
			break;
	}
};

// 点击开始时，动起来
var begin = document.getElementById('begin');
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var timer_1; //对应蛇蛇1号
var timer_2; //对应蛇蛇2号
begin.onclick = function begin() {
	clearInterval(timer_1);
	clearInterval(timer_2);
	// timer = setInterval(snake.run(), 500);   // 先执行run函数，把执行得到的结果，每500毫秒执行一次，不会在执行内部代码
	timer_1 = setInterval("snake_1.run()", 200); // 小技巧，每500毫秒执行字符串，字符串执行内部代码
	timer_2 = setInterval("snake_2.run()", 200);
};
pause.onclick = function pause() {
	alert("游戏已暂停！")
}
restart.onclick = function restart() {
	location.reload();
}