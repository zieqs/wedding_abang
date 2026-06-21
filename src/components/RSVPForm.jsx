'use client'

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
const supabase = createClient();

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    guest_name: '',
    attendance: 'Hadir',
    guest_count: 1,
    message: ''
  });
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  // Reset guest count to 0 when attendance is "Tidak Hadir"
  useEffect(() => {
    if (formData.attendance === 'Tidak Hadir') {
      setFormData(prev => ({ ...prev, guest_count: 0 }))
    }
  }, [formData.attendance])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!supabase) {
      setStatus('error');
      return;
    }

    const { error } = await supabase
      .from('rsvps')
      .insert([formData]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg">
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p>Your response has been received.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, guest_name: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Attendance</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, attendance: e.target.value})}
        >
          <option value="Hadir">Saya Akan Hadir / I will be there</option>
          <option value="Tidak Hadir">Maaf, Saya Tidak Dapat Hadir / Sorry, I cannot attend</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Number of Guests (including you)</label>
        <input
          type="number"
          min="0"
          value={formData.guest_count}
          disabled={formData.attendance === 'Tidak Hadir'}
          className={`w-full p-2 border rounded ${formData.attendance === 'Tidak Hadir' ? 'bg-gray-100 text-gray-400' : ''}`}
          onChange={(e) => {
            const val = parseInt(e.target.value)
            if (!isNaN(val) && val >= 0) {
              setFormData({...formData, guest_count: val})
            }
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message / Doa</label>
        <textarea
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
      >
        {status === 'loading' ? 'Sending...' : 'Send Response'}
      </button>

      {status === 'error' && <p className="text-red-500 text-center">Error! Please try again.</p>}
    </form>
  );
}