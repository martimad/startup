import React from 'react';
import './book.css';

export function Book() {

  return (
    <>
        <h1>Book Appointment</h1>
        <h2 align="center">
            January 2021
        </h2>
        <br />
        
        <table bgcolor="lightgrey" align="center"
            cellSpacing="21" cellPadding="21">
        
            <caption align="top">
                
            </caption>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>sat</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr></tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    <a href="https://www.fresha.com/a/madelynn-manis-pleasant-grove-952-south-main-street-sw9co9y5/all-offer?venue=true">
        <button align="center"> Book now!</button>
    </a>
    </>
  );
}
