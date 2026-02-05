
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  TrendingUp, 
  Layers, 
  MapPin, 
  FileText, 
  Briefcase,
  ChevronDown,
  Info,
  Search,
  Download,
  AlertCircle,
  ClipboardList,
  FileCheck,
  Target
} from 'lucide-react';
import { PROJECT_DETAILS } from './constants';
import { MetricGroup } from './components/MetricGroup';
import { CostTable } from './components/CostTable';
import { ProgressCharts } from './components/ChartSection';
import { VariationLog } from './components/VariationLog';
import { ReportLog } from './components/ReportLog';
import { BudgetBreakdown, ComparisonAnalytics, HorizontalProgressSection } from './components/BudgetInsights';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cost-control');

  const renderContent = () => {
    switch (activeTab) {
      case 'report-log':
        return <ReportLog />;
      case 'variation-log':
        return <VariationLog />;
      case 'cost-control':
      default:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Core Financial Modules Row */}
            <section className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                  Core Financial Modules
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white rounded-lg border border-slate-200 text-slate-400 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                    <Download className="w-3.5 h-3.5" /> Export PDF
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricGroup 
                  title="Project Value (AED)" 
                  theme="slate"
                  metrics={[
                    { label: 'Initial Contract', value: 182000000, isCurrency: true },
                    { label: 'Approved Variations', value: 101740, isCurrency: true },
                    { label: 'Under Review', value: 891411, isCurrency: true },
                    { label: 'Cost Savings', value: -4208908, isCurrency: true },
                    { label: 'Extension of Time', value: 0, isCurrency: true }
                  ]}
                  footerLabel="Total Value"
                  footerValue={178784243.44}
                />
                <MetricGroup 
                  title="Project Budget" 
                  theme="green"
                  metrics={[
                    { label: 'Initial Budget', value: 154700000, isCurrency: true },
                    { label: 'Initial Margin', value: 27300000, isCurrency: true },
                    { label: 'Initial Margin %', value: 15.00, isPercentage: true },
                    { label: 'Revised Budget', value: 151475500, isCurrency: true },
                    { label: 'Revised Margin', value: 27308743.44, isCurrency: true }
                  ]}
                  footerLabel="Revised Margin %"
                  footerValue={15.27}
                />
                <MetricGroup 
                  title="Commercial Status" 
                  theme="amber"
                  metrics={[
                    { label: 'Actual Booked', value: 79655190.19, isCurrency: true },
                    { label: 'Actual Certified', value: 21819524.58, isCurrency: true },
                    { label: 'Actual Cost Paid', value: 10093697.27, isCurrency: true },
                    { label: 'Balance to Pay', value: 11725827.32, isCurrency: true },
                    { label: 'Total Cash Received', value: 42809198.24, isCurrency: true }
                  ]}
                  footerLabel="Net Cash"
                  footerValue={32715500.97}
                />
                <MetricGroup 
                  title="Invoicing & Collection" 
                  theme="blue"
                  metrics={[
                    { label: 'Gross Submitted', value: 46618248.88, isCurrency: true },
                    { label: 'Gross Approved', value: 34235002.31, isCurrency: true },
                    { label: 'Under Review', value: 12383246.57, isCurrency: true },
                    { label: 'Net Certified + Adv', value: 49998093.37, isCurrency: true },
                    { label: 'Total Collected', value: 42809198.24, isCurrency: true }
                  ]}
                  footerLabel="Payment Due"
                  footerValue={7188895.13}
                />
              </div>
            </section>

            {/* Split Layout: Enhanced Matrix + Vertical Analytics */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Report Table (Bigger Range) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                    Detailed Cost Control Matrix
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Page 1 of 1</span>
                  </div>
                </div>
                <CostTable />
              </div>

              {/* Right Column: Breakdown + Comparison stacked */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex-1">
                  <BudgetBreakdown />
                </div>
                <div className="flex-1">
                  <ComparisonAnalytics />
                </div>
              </div>
            </section>

            {/* Horizontal Progress Section: Now stretching under the row above */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                  Project Variance & Progress KPIs
                </h3>
              </div>
              <HorizontalProgressSection />
            </section>

            {/* S-Curve Tracking Full Width at Bottom */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                  Cumulative Project S-Curve (Planned vs Actual)
                </h3>
              </div>
              <ProgressCharts />
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-100">
              <LayoutDashboard className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900 leading-none">NEXUS CONTROL</h1>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Enterprise Project Suite</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-1">
              {[
                { label: 'Project Health', id: 'project-health' },
                { label: 'Cost Control', id: 'cost-control' },
                { label: 'Variation Log', id: 'variation-log', icon: <ClipboardList className="w-3.5 h-3.5 mr-1" /> },
                { label: 'Report Log', id: 'report-log', icon: <FileCheck className="w-3.5 h-3.5 mr-1" /> },
                { label: 'Procurement', id: 'procurement' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 text-xs font-bold rounded-full transition-all ${
                    activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 pl-8 border-l border-slate-200">
              <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-700">31/DEC/2025</span>
              </div>
              <button className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform">
                <img src="https://picsum.photos/32/32" alt="Avatar" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Project Context Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex">
                    <div className="bg-indigo-950 text-white px-6 py-4 w-[280px] shrink-0 border-r border-white/10 flex flex-col justify-center">
                        <h2 className="text-sm font-black uppercase tracking-widest leading-tight">PROJECT COST CONTROL REPORT</h2>
                    </div>
                    <div className="bg-yellow-400 px-8 py-4 flex flex-col justify-center items-center border-r border-slate-200">
                        <span className="text-xs font-black text-slate-900">31/Dec/25</span>
                    </div>
                    <div className="flex-1 bg-slate-50/50 px-6 py-4 flex items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-4">Status:</span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            On Schedule {"&"} Within Budget
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-t border-slate-100">
                    <div className="p-4 space-y-3">
                        <div className="flex items-start">
                            <span className="w-24 text-[10px] font-black text-slate-400 uppercase shrink-0">Project Name</span>
                            <span className="text-[10px] font-bold text-slate-800 line-clamp-2">{PROJECT_DETAILS.name}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-24 text-[10px] font-black text-slate-400 uppercase shrink-0">Project Code</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.code}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-24 text-[10px] font-black text-slate-400 uppercase shrink-0">Site Location</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.location}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-24 text-[10px] font-black text-slate-400 uppercase shrink-0">Scope of Work</span>
                            <span className="text-[10px] font-bold text-slate-800 leading-tight">{PROJECT_DETAILS.scope}</span>
                        </div>
                    </div>

                    <div className="p-4 space-y-3">
                        <div className="flex items-start">
                            <span className="w-28 text-[10px] font-black text-slate-400 uppercase shrink-0">Client Name</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.client}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-28 text-[10px] font-black text-slate-400 uppercase shrink-0">PMC Consultant</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.pmc}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-28 text-[10px] font-black text-slate-400 uppercase shrink-0">MEP Consultant</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.mep}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-28 text-[10px] font-black text-slate-400 uppercase shrink-0">Main Contractor</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.contractor}</span>
                        </div>
                    </div>

                    <div className="p-4 space-y-3 bg-slate-50/30">
                        <div className="flex items-start">
                            <span className="w-32 text-[10px] font-black text-slate-400 uppercase shrink-0">Commencement Date</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.dates.commencement}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-32 text-[10px] font-black text-slate-400 uppercase shrink-0">Completion Date</span>
                            <span className="text-[10px] font-bold text-slate-800">{PROJECT_DETAILS.dates.completion}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="w-32 text-[10px] font-black text-slate-400 uppercase shrink-0">Total Duration (Days)</span>
                            <span className="text-[10px] font-black text-slate-900">{PROJECT_DETAILS.dates.totalDays}</span>
                        </div>
                        <div className="flex items-start pt-1 border-t border-slate-200">
                            <span className="w-32 text-[10px] font-black text-indigo-600 uppercase shrink-0">Remaining Days</span>
                            <span className="text-[10px] font-black text-indigo-700">{PROJECT_DETAILS.dates.remainingDays}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                        <Target className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase">Project Milestone Completion</span>
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-end mb-1.5">
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Mechanical, Electrical & Plumbing (MEP) Works</span>
                        <span className="text-xs font-black text-indigo-600">50.63%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)] transition-all duration-1000" style={{ width: '50.63%' }}></div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {renderContent()}

        <footer className="mt-12 pt-8 border-t border-slate-200 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { role: 'Quantity Surveyor', name: 'Supun Perera' },
              { role: 'Project Manager', name: 'Husam Sawafiah' },
              { role: 'Cost & Quantity Manager', name: 'Mostafa El Rouby' },
              { role: 'Projects Director', name: 'Sulaiman Naser' },
              { role: 'General Manager', name: 'Omar Kayyali' }
            ].map((sig, i) => (
              <div key={i} className="space-y-4">
                <div className="h-10 border-b border-dashed border-slate-300 flex items-end justify-center pb-1">
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-indigo-600 mb-0.5">{sig.name}</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{sig.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            {"©"} 2025 Nexus Project Control Systems. Proprietary and Confidential.
          </div>
        </footer>
      </main>

      {/* Persistent Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900/90 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-6">
        <div className="flex items-center gap-4 pr-6 border-r border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Live Connectivity</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg transition-all active:scale-95">
            Recalculate Budget
          </button>
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all active:scale-95">
            Snapshot
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
