# 灌木新媒体实验室 Website 2.0

Website 2.0 的模块化源工程。旧网站继续在线运行，并作为迁移过程中的视觉、内容和交互验收基线。

## 开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm run lint
npm run build
```

## 项目原则

- 新仓库只保存可维护的模块化源码和经过筛选的有效资料。
- 不继续扩写旧站的单文件 `index.html`。
- 先完成七个旧页面的等价迁移，再进行 Website 2.0 的视觉和功能升级。
- 原始交接包保持独立归档，不把旧 `.git` 历史或无效工作流混入新仓库。
