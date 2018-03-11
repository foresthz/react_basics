
console.info('inside single jsx code');

function e(id) {
	return document.getElementById(id);
}

ReactDOM.render(
	<div className="content">
		<div className="left">遇大事矜持者，小事必纵弛；处明庭检饰者，暗室必放逸。{Math.random()}</div>
		<div className="middle">君子只是一个念头持到底，自然临小事如临大敌，坐密室若坐通衢。</div>
		<span className="right">使人有面前之誉，不若使其无背后之毁；使人有乍交之欢，不若使其无久处之厌。</span>
	</div>,
	e('left')
)

// .content>.left+.middle+span.right