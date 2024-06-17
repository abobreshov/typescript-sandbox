import { merge } from './app';

describe('merge', () => {
    it('should merge two sorted arrays', () => {
      const nums1 = [1, 2, 3, 0, 0, 0];
      const m = 3;
      const nums2 = [2, 5, 6];
      const n = 3;
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
  
    it('should handle empty arrays', () => {
      const nums1: number[] = [];
      const m = 0;
      const nums2: number[] = [];
      const n = 0;
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual([]);
    });
  
    it('should handle one empty array', () => {
      const nums1 = [1, 2, 3];
      const m = 3;
      const nums2: number[] = [];
      const n = 0;
      merge(nums1, m, nums2, n);
      expect(nums1).toEqual([1, 2, 3]);
    });
  
    
  
  // Test case 1: Both arrays are empty
  console.log(merge([], 0, [], 0)); // []
  
  // Test case 2: One array is empty, the other is not
  console.log(merge([], 0, [1, 2, 3], 3)); // [1, 2, 3]
  console.log(merge([1, 2, 3], 3, [], 0)); // [1, 2, 3]
  
  // Test case 3: Both arrays have elements
  console.log(merge([1, 3, 5], 3, [2, 4, 6], 3)); // [1, 2, 3, 4, 5, 6]
  console.log(merge([1, 2, 3], 3, [4, 5, 6], 3)); // [1, 2, 3, 4, 5, 6]
  console.log(merge([4, 5, 6], 3,  [1, 2, 3], 3)); // [1, 2, 3, 4, 5, 6]it('should merge two sorted arrays with duplicate elements', () => {

});
