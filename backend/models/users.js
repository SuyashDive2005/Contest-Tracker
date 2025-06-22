const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  constructor(userData) {
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
  }

  // Create a new user
  async save() {
    try {
      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(this.password, saltRounds);

      const query = `
        INSERT INTO users (name, email, password) 
        VALUES (?, ?, ?)
      `;
      
      const [result] = await pool.execute(query, [
        this.name,
        this.email,
        hashedPassword
      ]);

      return {
        id: result.insertId,
        name: this.name,
        email: this.email
      };
    } catch (error) {
      throw error;
    }
  }

  // Find user by email
  static async findByEmail(email) {
    try {
      const query = 'SELECT * FROM users WHERE email = ?';
      const [rows] = await pool.execute(query, [email]);
      
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  }

  // Find user by ID
  static async findById(id) {
    try {
      const query = 'SELECT id, name, email, is_verified, created_at FROM users WHERE id = ?';
      const [rows] = await pool.execute(query, [id]);
      
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  }

  // Verify password
  static async verifyPassword(plainPassword, hashedPassword) {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      throw error;
    }
  }

  // Update user password
  static async updatePassword(userId, newPassword) {
    try {
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      
      const query = 'UPDATE users SET password = ? WHERE id = ?';
      const [result] = await pool.execute(query, [hashedPassword, userId]);
      
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }

  // Set reset token
  static async setResetToken(email, token, expires) {
    try {
      const query = `
        UPDATE users 
        SET reset_token = ?, reset_token_expires = ? 
        WHERE email = ?
      `;
      
      const [result] = await pool.execute(query, [token, expires, email]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }

  // Find user by reset token
  static async findByResetToken(token) {
    try {
      const query = `
        SELECT * FROM users 
        WHERE reset_token = ? AND reset_token_expires > NOW()
      `;
      
      const [rows] = await pool.execute(query, [token]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      throw error;
    }
  }

  // Clear reset token
  static async clearResetToken(userId) {
    try {
      const query = `
        UPDATE users 
        SET reset_token = NULL, reset_token_expires = NULL 
        WHERE id = ?
      `;
      
      const [result] = await pool.execute(query, [userId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }

  // Get all users (admin functionality)
  static async findAll(limit = 50, offset = 0) {
    try {
      const query = `
        SELECT id, name, email, is_verified, created_at 
        FROM users 
        ORDER BY created_at DESC 
        LIMIT ? OFFSET ?
      `;
      
      const [rows] = await pool.execute(query, [limit, offset]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  // Delete user
  static async deleteById(id) {
    try {
      const query = 'DELETE FROM users WHERE id = ?';
      const [result] = await pool.execute(query, [id]);
      
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;