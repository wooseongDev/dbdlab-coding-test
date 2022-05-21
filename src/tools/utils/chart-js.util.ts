import { CategoryScale, Chart, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js'

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip)

Chart.defaults.responsive = true

Chart.defaults.font.family = `'Red Hat Display', 'Noto Sans KR', sans-serif`
Chart.defaults.font.size = 12
