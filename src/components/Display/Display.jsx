import React from 'react';

export default function Display({ condition, children }) {
  if (condition) {
    return children[0];
  }
  return children[1];
}