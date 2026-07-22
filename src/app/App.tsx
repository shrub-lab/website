import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes'

function BaselinePage({ title, legacyHash }: { title: string; legacyHash: string }) {
  return (
    <main className="baseline-page">
      <p className="eyebrow">WEBSITE 2.0 · MIGRATION BASELINE</p>
      <h1>{title}</h1>
      <p>该页面已进入迁移清单，后续将以旧站 #{legacyHash} 页面为验收基线逐项复刻。</p>
    </main>
  )
}

export function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/">SHRUB LAB</NavLink>
        <nav aria-label="主导航">
          {routes.map((route) => (
            <NavLink key={route.path} to={route.path} end={route.path === '/'}>
              {route.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<BaselinePage title={route.title} legacyHash={route.legacyHash} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
