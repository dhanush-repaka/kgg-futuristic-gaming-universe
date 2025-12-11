// API service for booking functionality
class ApiService {
  private primaryUrl: string | undefined;
  private fallbackUrl: string = 'http://localhost:8001';

  constructor() {
    this.primaryUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  }

  async makeRequest(endpoint: string, options: RequestInit = {}) {
    const { method = 'GET', body, headers = {}, signal } = options;
    const timeout = 10000;

    // Try primary URL first
    if (this.primaryUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        const response = await fetch(`${this.primaryUrl}/api${endpoint}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: body ? JSON.stringify(body) : undefined,
          signal: signal || controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          return await response.json();
        } else {
          throw new Error(`Primary URL failed: ${response.status}`);
        }
      } catch (primaryError: any) {
        console.warn('Primary backend URL failed, trying fallback:', primaryError.message);
        
        // Try fallback URL
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);
          
          const response = await fetch(`${this.fallbackUrl}/api${endpoint}`, {
            method,
            headers: {
              'Content-Type': 'application/json',
              ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
            signal: signal || controller.signal
          });
          
          clearTimeout(timeoutId);
          
          if (response.ok) {
            return await response.json();
          } else {
            throw new Error(`Fallback URL also failed: ${response.status}`);
          }
        } catch (fallbackError: any) {
          throw new Error(`Both URLs failed. Primary: ${primaryError.message}, Fallback: ${fallbackError.message}`);
        }
      }
    } else {
      // No primary URL, use fallback directly
      const response = await fetch(`${this.fallbackUrl}/api${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    }
  }
}

const apiService = new ApiService();

// Booking service
export const bookingService = {
  create: async (bookingData: any) => {
    return await apiService.makeRequest('/bookings', {
      method: 'POST',
      body: bookingData,
    });
  },
  
  getAll: async () => {
    return await apiService.makeRequest('/bookings');
  },
  
  getById: async (id: string) => {
    return await apiService.makeRequest(`/bookings/${id}`);
  },
  
  getByReference: async (referenceNumber: string) => {
    return await apiService.makeRequest(`/bookings/reference/${referenceNumber}`);
  },
  
  cancelByReference: async (referenceNumber: string) => {
    return await apiService.makeRequest(`/bookings/reference/${referenceNumber}/cancel`, {
      method: 'POST',
    });
  },
  
  update: async (id: string, data: any) => {
    return await apiService.makeRequest(`/bookings/${id}`, {
      method: 'PUT',
      body: data,
    });
  },
  
  delete: async (id: string) => {
    return await apiService.makeRequest(`/bookings/${id}`, {
      method: 'DELETE',
    });
  }
};

// Availability service
export const availabilityService = {
  getByDate: async (date: Date | string) => {
    let dateStr: string;
    if (date instanceof Date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      dateStr = `${y}-${m}-${d}`;
    } else {
      dateStr = date;
    }
    return await apiService.makeRequest(`/availability/${dateStr}`);
  }
};

// Settings service
export const settingsService = {
  get: async () => {
    return await apiService.makeRequest('/settings');
  }
};

export default apiService;

