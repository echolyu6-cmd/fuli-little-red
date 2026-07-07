# 福里小作品 01｜小红帽三明治实验室 V0.5

## 当前体验

V0.5 是一次玩法机制 + 真实图片 + 爽感反馈 + 线下集卡联动整理版。

用户可以：

1. 按官方搭配自动生成一份三明治卡。
2. 自由乱叠一份自己的赛博小红帽。
3. 如果搭配太自由，召唤隐藏结果「福气满满拼盘」。
4. 在结果页看到线下提示：真实福里点对应小红帽系列三明治，可获得对应三明治卡。

## 页面 / 状态

- 首页：小红帽三明治实验室。
- 官方搭配：官方卡牌选择 + 自动组装动画。
- 自由乱叠：不限制顺序，可重复点击，最多 6 层，第 4 层后可出餐。
- 结果页：官方卡结果或福气满满拼盘隐藏结果。

## 素材目录

新增整理：

- `assets/products/official-cards/sandwich-menu.jpg`
- `assets/products/fuli-platter/fuli-platter.png`
- `assets/ingredients/bread/`
- `assets/ingredients/meat/`
- `assets/ingredients/vegetables/`
- `assets/ingredients/cheese/`
- `assets/ingredients/sauce/`
- `assets/ui/`
- `assets/sounds/`

目前声音仍使用 Web Audio 生成，没有新增音频文件。

## 结果判断

- 自由乱叠会根据所选食材 tags 和官方三明治 tags 做简单匹配。
- 达到 6 层且混合多类食材，或与官方款匹配度太低，会生成隐藏结果「福气满满拼盘」。
- 官方搭配模式直接生成对应官方卡结果。

## 边界

- 不做登录、数据库、线上卡册、核销、积分、排行榜、真实支付。
- 线上 DIY 只是小游戏玩法，不代表线下可任意食材自由点单。
- 真实点单请按福里当日菜单。

## 本地预览

```powershell
node .\preview-server.js . 8088
```

打开：

```text
http://127.0.0.1:8088/
```
