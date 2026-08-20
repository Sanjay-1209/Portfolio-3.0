import React, { useState } from 'react';
import { Plus, Trash2, Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteItem {
  id: string;
  description: string;
  unitPrice: number;
  qty: number;
  gstRate: number;
}

export const InteractiveQuotationPreview: React.FC<{ onNavigateToWorkWithMe?: () => void }> = ({ onNavigateToWorkWithMe }) => {
  const [clientName, setClientName] = useState('Apex Technologies Private Ltd');
  const [discountPercent, setDiscountPercent] = useState(5);
  const [items, setItems] = useState<QuoteItem[]>([
    { id: '1', description: 'Enterprise Data Pipeline & BigQuery ETL Setup', unitPrice: 45000, qty: 1, gstRate: 18 },
    { id: '2', description: 'Executive Power BI / Tableau KPI Dashboard', unitPrice: 35000, qty: 2, gstRate: 18 },
    { id: '3', description: 'Automated Daily Python Ingestion & Report Bot', unitPrice: 20000, qty: 1, gstRate: 18 }
  ]);
  const [isGenerated, setIsGenerated] = useState(false);

  const predefinedTemplates = [
    { name: 'Analytics & BI Suite', price: 45000, gst: 18 },
    { name: 'Automated Quotation Engine System', price: 55000, gst: 18 },
    { name: 'End-to-End Responsive Web Platform', price: 40000, gst: 18 },
    { name: 'Data Cleaning & Schema Normalization', price: 25000, gst: 18 }
  ];

  const addItem = (template?: { name: string; price: number; gst: number }) => {
    const newItem: QuoteItem = {
      id: Math.random().toString(),
      description: template ? template.name : 'Custom Analytics / Automation Deliverable',
      unitPrice: template ? template.price : 25000,
      qty: 1,
      gstRate: template ? template.gst : 18
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof QuoteItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Calculations
  const subtotal = items.reduce((acc, curr) => acc + (curr.unitPrice * curr.qty), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableTotal = subtotal - discountAmount;
  const totalGst = items.reduce((acc, curr) => {
    const lineBase = (curr.unitPrice * curr.qty);
    const lineRatio = subtotal > 0 ? lineBase / subtotal : 0;
    const lineDiscounted = taxableTotal * lineRatio;
    return acc + (lineDiscounted * curr.gstRate / 100);
  }, 0);
  const grandTotal = taxableTotal + totalGst;

  const handleGenerateQuote = () => {
    setIsGenerated(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#1C1C1C', '#C7A600', '#78736A']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-[#1C1C1C]/15">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#FAFAF8] text-[#1C1C1C] text-[10px] font-sans font-bold uppercase tracking-widest border border-[#1C1C1C]/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C7A600]" />
                Live Interactive Instrument
              </span>
              <span className="text-[10px] text-[#1C1C1C]/60 font-sans uppercase tracking-wider hidden sm:inline">Module #09 in Practice</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans tracking-tight text-[#1C1C1C] mt-2">
              Automated Quotation & B2B Commercial Engine
            </h3>
            <p className="text-xs sm:text-sm font-serif text-[#1C1C1C]/70 mt-1 max-w-2xl">
              Try this functional prototype. It illustrates how manual word processing and error-prone pricing spreadsheets are replaced with instant, compliant generators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#1C1C1C]/70 bg-[#FAFAF8] px-3 py-1.5 border border-[#1C1C1C]/10">
              Ref: <strong className="text-[#1C1C1C]">SD-QT-{new Date().getFullYear()}-042</strong>
            </span>
          </div>
        </div>

        {/* Form Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          {/* Client selector */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1C1C1C]/70 mb-1.5">
                Client / Company Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full rounded-xl bg-[#FAFAF8] border border-black/12 px-4 py-2.5 text-sm text-[#1C1C1C] font-sans focus:outline-none focus:border-[#C7A600]"
                placeholder="Enter client company name..."
              />
            </div>

            {/* Quick add templates */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-[#1C1C1C]/60 block mb-2 font-medium">Quick-Insert Deliverable Template:</span>
              <div className="flex flex-wrap gap-2">
                {predefinedTemplates.map((tpl, i) => (
                  <button
                    key={i}
                    onClick={() => addItem(tpl)}
                    className="text-xs font-sans px-3 py-1 bg-[#FAFAF8] hover:bg-[#FFF8DA] border border-[#1C1C1C]/15 text-[#1C1C1C] flex items-center gap-1.5 transition-colors"
                  >
                    <Plus className="w-3 h-3 text-[#C7A600]" />
                    {tpl.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile line-item cards: intentionally redesigned instead of forcing a wide desktop table onto phones */}
            <div className="sm:hidden space-y-2.5">
              {items.map((item, itemIndex) => (
                <div key={item.id} className="rounded-xl border border-black/10 bg-[#FAFAF8] p-3 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-[.14em] text-black/45">Line item {itemIndex + 1}</span>
                    <button onClick={() => removeItem(item.id)} disabled={items.length <= 1} className="p-1 text-black/35 hover:text-red-700 disabled:opacity-20" aria-label="Remove line item"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                  <input type="text" value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} className="w-full rounded-lg bg-white border border-black/10 px-3 py-2 text-xs font-sans" aria-label="Deliverable description" />
                  <div className="grid grid-cols-3 gap-2">
                    <label className="text-[9px] font-sans font-bold text-black/45">Rate
                      <input type="number" value={item.unitPrice} onChange={(e) => updateItem(item.id, 'unitPrice', Number(e.target.value))} className="mt-1 w-full rounded-lg bg-white border border-black/10 px-2 py-2 text-[11px] text-black font-mono" />
                    </label>
                    <label className="text-[9px] font-sans font-bold text-black/45">Qty
                      <input type="number" min="1" value={item.qty} onChange={(e) => updateItem(item.id, 'qty', Math.max(1, Number(e.target.value)))} className="mt-1 w-full rounded-lg bg-white border border-black/10 px-2 py-2 text-[11px] text-black text-center font-mono" />
                    </label>
                    <label className="text-[9px] font-sans font-bold text-black/45">GST
                      <select value={item.gstRate} onChange={(e) => updateItem(item.id, 'gstRate', Number(e.target.value))} className="mt-1 w-full rounded-lg bg-white border border-black/10 px-1 py-2 text-[11px] text-black text-center font-mono">
                        <option value="0">0%</option><option value="5">5%</option><option value="12">12%</option><option value="18">18%</option><option value="28">28%</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-black/8"><span className="text-[9px] font-sans font-bold uppercase tracking-wider text-black/40">Amount</span><span className="font-mono text-xs font-bold">₹{(item.unitPrice * item.qty).toLocaleString('en-IN')}</span></div>
                </div>
              ))}
            </div>

            {/* Desktop / tablet line-item table */}
            <div className="overflow-x-auto hidden sm:block">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1C1C1C]/15 text-[#1C1C1C]/60 font-sans uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 px-2 font-bold">Deliverable Description</th>
                    <th className="py-2.5 px-2 font-bold w-28">Rate (₹)</th>
                    <th className="py-2.5 px-2 font-bold w-16 text-center">Qty</th>
                    <th className="py-2.5 px-2 font-bold w-20 text-center">GST %</th>
                    <th className="py-2.5 px-2 font-bold w-28 text-right">Amount (₹)</th>
                    <th className="py-2.5 px-2 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C1C1C]/10 font-sans">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-[#FAFAF8]/50">
                      <td className="py-2.5 px-2">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          className="w-full bg-transparent text-[#1C1C1C] border-b border-transparent focus:border-[#1C1C1C] focus:outline-none py-0.5 text-xs"
                        />
                      </td>
                      <td className="py-2.5 px-2">
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(item.id, 'unitPrice', Number(e.target.value))}
                          className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/15 px-2 py-1 text-[#1C1C1C] font-mono text-xs"
                        />
                      </td>
                      <td className="py-2.5 px-2">
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) => updateItem(item.id, 'qty', Math.max(1, Number(e.target.value)))}
                          className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/15 px-2 py-1 text-[#1C1C1C] text-center font-mono text-xs"
                        />
                      </td>
                      <td className="py-2.5 px-2">
                        <select
                          value={item.gstRate}
                          onChange={(e) => updateItem(item.id, 'gstRate', Number(e.target.value))}
                          className="w-full bg-[#FAFAF8] border border-[#1C1C1C]/15 px-1 py-1 text-[#1C1C1C] text-center font-mono text-xs"
                        >
                          <option value="0">0%</option>
                          <option value="5">5%</option>
                          <option value="12">12%</option>
                          <option value="18">18%</option>
                          <option value="28">28%</option>
                        </select>
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono font-bold text-[#1C1C1C]">
                        ₹{(item.unitPrice * item.qty).toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          disabled={items.length <= 1}
                          className="text-[#1C1C1C]/40 hover:text-red-700 disabled:opacity-20 transition-colors p-1"
                          title="Remove row"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => addItem()}
              className="text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center gap-1.5 py-1 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Custom Line Item
            </button>
          </div>

          {/* Calculation summary card */}
          <div className="bg-[#FFF8DA] border border-[#1C1C1C]/15 p-5 flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#1C1C1C]/15 pb-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1C1C1C]">Financial Ledger</span>
                <span className="text-[10px] font-mono text-[#1C1C1C]/60">Auto-Calculated</span>
              </div>

              <div className="space-y-2 text-xs font-sans">
                <div className="flex justify-between text-[#1C1C1C]/70">
                  <span>Gross Subtotal:</span>
                  <span className="font-mono font-medium text-[#1C1C1C]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-between text-[#1C1C1C]/70">
                  <div className="flex items-center gap-1.5">
                    <span>Discount:</span>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      value={discountPercent}
                      onChange={(e) => setDiscountPercent(Number(e.target.value))}
                      className="w-12 bg-white border border-[#1C1C1C]/20 px-1 text-center text-xs text-[#1C1C1C] font-mono"
                    />
                    <span>%</span>
                  </div>
                  <span className="font-mono text-emerald-800 font-medium">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-[#1C1C1C]/70">
                  <span>Taxable Base:</span>
                  <span className="font-mono font-medium text-[#1C1C1C]">₹{taxableTotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-[#1C1C1C]/70">
                  <span>Total GST:</span>
                  <span className="font-mono font-medium text-[#1C1C1C]">+₹{Math.round(totalGst).toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-2 border-t border-[#1C1C1C]/15 flex justify-between items-baseline">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]">Grand Total:</span>
                  <span className="text-xl font-sans font-bold text-[#1C1C1C]">
                    ₹{Math.round(grandTotal).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleGenerateQuote}
                className="w-full py-3 bg-[#1C1C1C] hover:bg-[#333333] text-[#FAFAF8] font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4" />
                {isGenerated ? 'Recalculate & Validate Proposal' : 'Generate Formal Proposal'}
              </button>

              {isGenerated && (
                <div className="p-3 bg-white border border-emerald-700/30 text-center animate-in fade-in duration-200">
                  <span className="text-xs font-sans font-semibold text-emerald-800 flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Proposal Formatted for {clientName}
                  </span>
                  <p className="text-[11px] font-serif text-[#1C1C1C]/70 mt-1">
                    Need a custom quotation engine for your commercial workflow?
                  </p>
                  {onNavigateToWorkWithMe && (
                    <button
                      onClick={onNavigateToWorkWithMe}
                      className="mt-2 text-xs font-sans uppercase tracking-wider font-bold text-[#1C1C1C] hover:underline flex items-center justify-center gap-1 mx-auto"
                    >
                      Discuss Your Custom Tool Requirement <ArrowRight className="w-3 h-3 text-[#C7A600]" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
