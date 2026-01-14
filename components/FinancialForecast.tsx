import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, Users, DollarSign } from "lucide-react";

export function FinancialForecast() {
  const growthData = [
    { label: "Current", arr: 1000, customers: 8, color: "#3b82f6" },
    { label: "Month 12", arr: 1500, customers: 25, color: "#a855f7" },
    { label: "Month 18", arr: 2400, customers: 40, color: "#10b981" }
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Financial Forecast</h2>
          <p className="text-xl text-slate-300 mb-2">18-Month Trajectory</p>
          <p className="text-lg text-slate-400">
            Transitioning from Founder-led sales to a Scalable Revenue Machine
          </p>
        </div>

        {/* Growth chart */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-xl mb-6 text-white">ARR Growth: $1M → $2.4M</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="label" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${value}k`} />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px'
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#94a3b8' }}
                formatter={(value) => [`$${value}k ARR`, 'Value']}
              />
              <Bar
                dataKey="arr"
                radius={[8, 8, 0, 0]}
                activeBar={{
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))',
                  stroke: '#fff',
                  strokeWidth: 2
                }}
              >
                {growthData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics table */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-slate-400">Metric</th>
                <th className="px-6 py-4 text-center text-blue-400">Current (Month 0)</th>
                <th className="px-6 py-4 text-center text-purple-400">Scale (Month 12)</th>
                <th className="px-6 py-4 text-center text-green-400">Series A Ready (Month 18)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-700">
                <td className="px-6 py-4 text-slate-300">Customers</td>
                <td className="px-6 py-4 text-center text-white">8 (4 Live / 4 Signed)</td>
                <td className="px-6 py-4 text-center text-white">25 Active</td>
                <td className="px-6 py-4 text-center text-white font-semibold">40+ Active</td>
              </tr>
              <tr className="border-t border-slate-700 bg-slate-800/30">
                <td className="px-6 py-4 text-slate-300">MRR</td>
                <td className="px-6 py-4 text-center text-white">~$83k (contracted; rollout in progress)</td>
                <td className="px-6 py-4 text-center text-white">$125k</td>
                <td className="px-6 py-4 text-center text-white font-semibold">$200k</td>
              </tr>
              <tr className="border-t border-slate-700">
                <td className="px-6 py-4 text-slate-300">ARR</td>
                <td className="px-6 py-4 text-center text-white">$1M (Contracted)</td>
                <td className="px-6 py-4 text-center text-white">$1.5M</td>
                <td className="px-6 py-4 text-center text-white font-semibold">$2.4M</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-500/50 rounded-xl p-6 text-center">
            <Users className="text-blue-400 mx-auto mb-3" size={32} />
            <div className="text-3xl text-white mb-2">5x</div>
            <div className="text-sm text-slate-400">Customer Growth</div>
            <div className="text-xs text-blue-400 mt-1">8 → 40+ customers</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-500/50 rounded-xl p-6 text-center">
            <DollarSign className="text-purple-400 mx-auto mb-3" size={32} />
            <div className="text-3xl text-white mb-2">2.4x</div>
            <div className="text-sm text-slate-400">ARR Growth</div>
            <div className="text-xs text-purple-400 mt-1">$1M → $2.4M</div>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-500/50 rounded-xl p-6 text-center">
            <TrendingUp className="text-green-400 mx-auto mb-3" size={32} />
            <div className="text-3xl text-white mb-2">Ready</div>
            <div className="text-sm text-slate-400">Series A Metrics</div>
            <div className="text-xs text-green-400 mt-1">18 months</div>
          </div>
        </div>
      </div>
    </section>
  );
}