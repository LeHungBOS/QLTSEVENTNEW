
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AssetManagement from './components/AssetManagement';
import BookingCalendar from './components/BookingCalendar';
import QuotationForm from './components/QuotationForm';
import UnitLogsModal from './components/UnitLogsModal';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assets">Quản lý tài sản</Link>
        <Link to="/booking">Lịch booking</Link>
        <Link to="/quotation">Báo giá</Link>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<AssetManagement />} />
        <Route path="/booking" element={<BookingCalendar />} />
        <Route path="/quotation" element={<QuotationForm />} />
        <Route path="/logs" element={<UnitLogsModal />} />
      </Routes>
    </BrowserRouter>
  );
}
