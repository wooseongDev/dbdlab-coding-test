import { BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js'

Chart.register(BarElement, CategoryScale, Legend, LinearScale, LineElement, PointElement, Tooltip)

Chart.defaults.responsive = true

Chart.defaults.font.family = `'Red Hat Display', 'Noto Sans KR', sans-serif`
Chart.defaults.font.size = 12
