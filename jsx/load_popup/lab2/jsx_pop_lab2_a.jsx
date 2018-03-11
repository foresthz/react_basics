

function addEvent(id, event, func) {
	let node;
	if(id instanceof HTMLElement) {
		node=id;
	} else {
		node = document.getElementById(id);
	}
	node.addEventListener(event, func);
}

function e(id) {
	return document.getElementById(id);
}

function add_pop_component(head='eee', content='fff') {
	let node=document.querySelector('#explain_area');
	if(node) {
		node.querySelector('.head').innerText=head;
		node.querySelector('.content').innerText=content;
		node.querySelector('.number').innerText=Math.random();
	} else {
		ReactDOM.render(
			<div id="explain_area">
				<div className="head">{head}</div>
				<div className="content">{content}</div>
				<div className="number">{Math.random()}</div>
			</div>,
			e('pop_div')
		);
	}
}

function getSelector(selector) {
	if(selector instanceof HTMLElement) return selector;
	return document.querySelector(selector);
}

function show(selector, display='inline-block', coordinate={x:0,y:0}) {
	let node = getSelector(selector);
	let style = window.getComputedStyle(node);
	console.info('---------------------');
	console.info(style.display, node.style.display);
	if(typeof display=='undefined' || display=='') {
		display='inline-block';
	}

	if(style.display == 'none' || node.style.display == 'none') {
		node.style.display = display;
		node.style.left = coordinate.x;
		node.style.top = coordinate.y;
	}
	console.info(style.display, node.style.display);
	// debugger;
}

function hide(selector) {
	let node = getSelector(selector);
	// let style = window.getComputedStyle(node);
	// debugger;
	node.style.display='none';
}

function btn1_lab() {
	addEvent('btn1', 'click', function() {
		open('http://toutiao.com');
	});

	// hide('#explain_area');



	addEvent('btn1', 'mousemove', function(e) {
		// debugger;
		let rect = e.target.getBoundingClientRect();
		let left = rect.left;
		let top = rect.top;
		let middle_x = (rect.left + rect.width) / 2;
		console.info('relative to last position: ', e.movementX);
		if (e.x + e.movementX < middle_x && e.x > middle_x) {
			console.info('%c-> Left', 'color:green;font-size:30px;');
		} else if (e.x + e.movementX > middle_x && e.x < middle_x) {
			console.info('%c-> Right', 'color:red;font-size:30px;');
		}
		console.info(rect);
		console.info(e);
	});

	addEvent('btn1', 'mouseenter', function(event) {
		console.info('%cmouse enter', 'color:red;font-size:40px;');
		let rect = event.target.getBoundingClientRect();
		show('#explain_area', '', {
			x: rect.left,
			y: rect.bottom
		});
	});

	addEvent('btn1', 'mouseout', function(e) {
		console.info(`%cmouse out`, 'color:red;font-size:20px');
		hide('#explain_area');
	});
};

function all_btns_lab() {
	let nodes = document.querySelectorAll('button');
	nodes.forEach(function(node){
		addEvent(node, 'mouseenter', function(event){
			let target = event.target;
			let position = target.getBoundingClientRect();
			add_pop_component(node.innerText);
			show('#explain_area', '', {x:position.left, y:position.bottom});
		});
		addEvent(node, 'mouseout', function(event) {
			hide('#explain_area');
		});
		addEvent(node, 'click', function(event) {
			let target = event.target;
			if(target.dataset['url']){
				open(target.dataset['url']);
			} else {
				open('https://www.baidu.com/?v='+Math.random());
			}
			// debugger;
		});
	});
}



// btn1_lab();
all_btns_lab();